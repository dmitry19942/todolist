import {AppDispatch, AppThunk} from "../../app/store";
import {appActions, RequestStatusType} from "../../app/app-reducer";
import {
    AddTaskArgType,
    TaskPriorities,
    TaskStatuses,
    TaskType,
    todolistAPI,
    UpdateTaskModelType
} from "../../api/todolist-api";
import {handleServerAppError, handleServerNetworkError} from "../../utils/error-utils";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {todolistsActions} from "./todolists-reducer";
import {createAppAsyncThunk} from "../../utils/create-app-async-thunk";

// types
type UpdateDomainTaskModelType = {
    title?: string
    description?: string
    status?: TaskStatuses
    priority?: TaskPriorities
    startDate?: string
    deadline?: string
}
export type TasksStateType = {
    [key: string]: Array<TaskType>
}
type UpdateTaskArgType = {
    todolistId: string
    taskId: string
    domainModel: UpdateDomainTaskModelType
}

// state
const initialState: TasksStateType = {}

const fetchTasks = createAppAsyncThunk<{ tasks: TaskType[], todolistId: string }, string>
('tasks/fetchTasks', async (todolistId: string, thunkAPI) => {
    const {dispatch, rejectWithValue} = thunkAPI
    try {
        dispatch(appActions.setAppStatusAC({status: 'loading'}))
        const res = await todolistAPI.getTask(todolistId)
        const tasks = res.data.items
        dispatch(appActions.setAppStatusAC({status: 'succeeded'}))
        return {tasks, todolistId}
    } catch (e) {
        handleServerNetworkError(e, dispatch)
        return rejectWithValue(null)
    }
})

const addTask = createAppAsyncThunk<{ task: TaskType }, AddTaskArgType>
('tasks/addTask', async (arg, thunkAPI) => {
    const {dispatch, rejectWithValue} = thunkAPI
    try {
        dispatch(appActions.setAppStatusAC({status: 'loading'}))
        const res = await todolistAPI.createTask(arg)
        const task = res.data.data.item
        if (res.data.resultCode === 0) {
            dispatch(appActions.setAppStatusAC({status: 'succeeded'}))
            return {task}
        } else {
            handleServerAppError(res.data, dispatch)
            return rejectWithValue(null)
        }
    } catch (e) {
        handleServerNetworkError(e, dispatch)
        return rejectWithValue(null)
    }
})

const updateTask = createAppAsyncThunk<UpdateTaskArgType, UpdateTaskArgType>
('tasks/updateTask', async (arg, thunkAPI) => {
    const {dispatch, rejectWithValue, getState} = thunkAPI
    try {
        const tasksForCurrentTodolist = getState().tasks[arg.todolistId]
        const task = tasksForCurrentTodolist.find(t => t.id === arg.taskId)
        if (!task) {
            console.warn('task not found in the state')
            dispatch(appActions.setAppErrorAC({error: 'Task not found in the state'}))
            return rejectWithValue(null)
        }
        const apiModel: UpdateTaskModelType = {
            title: task.title,
            startDate: task.startDate,
            priority: task.priority,
            description: task.description,
            deadline: task.deadline,
            status: task.status,
            ...arg.domainModel
        }
        dispatch(appActions.setAppStatusAC({status: 'loading'}))
        const res = await todolistAPI.updateTask(arg.todolistId, arg.taskId, apiModel)
        if (res.data.resultCode === 0) {
            dispatch(appActions.setAppStatusAC({status: 'succeeded'}))
            return arg
        } else {
            handleServerAppError(res.data, dispatch);
            return rejectWithValue(null)
        }
    } catch (e) {
        handleServerNetworkError(e, dispatch)
        return rejectWithValue(null)
    }
})

const slice = createSlice({
        name: 'tasks',
        initialState: initialState,
        reducers: {
            removeTaskAC(state, action: PayloadAction<{ taskId: string, todolistId: string }>) {
                const tasks = state[action.payload.todolistId]
                const index = tasks.findIndex(t => t.id === action.payload.taskId)
                if (index > -1) {
                    tasks.splice(index, 1)
                }
            },
            changeTaskEntityStatusAC(state, action: PayloadAction<{ todolistId: string, taskId: string, entityStatus: RequestStatusType }>) {
                const tasks = state[action.payload.todolistId]
                const index = tasks.findIndex(t => t.id === action.payload.taskId)
                if (index > -1) {
                    tasks[index] = {...tasks[index], entityStatus: action.payload.entityStatus}
                }
            }
        },
        extraReducers: (builder) => {
            builder.addCase(todolistsActions.addTodolistAC, (state, action) => {
                state[action.payload.todolist.id] = []
            })
            builder.addCase(todolistsActions.removeTodolistAC, (state, action) => {
                delete state[action.payload.todolistId]
            })
            builder.addCase(todolistsActions.setTodolistsAC, (state, action) => {
                action.payload.todolists.forEach((tl) => {
                    state[tl.id] = []
                })
            })
            builder.addCase(todolistsActions.clearTodolistDataAC, () => {
                return {}
            })
            builder.addCase(fetchTasks.fulfilled, (state, action) => {
                state[action.payload.todolistId] = action.payload.tasks
            })
            builder.addCase(addTask.fulfilled, (state, action) => {
                state[action.payload.task.todoListId].unshift(action.payload.task)
            })
            builder.addCase(updateTask.fulfilled, (state, action) => {
                const tasks = state[action.payload.todolistId]
                const index = tasks.findIndex(t => t.id === action.payload.taskId)
                if (index > -1) {
                    tasks[index] = {...tasks[index], ...action.payload.domainModel}
                }
            })
        }
    }
)

export const tasksReducer = slice.reducer;

export const tasksActions = slice.actions

export const tasksThunks = {fetchTasks, addTask, updateTask}

// thunks
// export const fetchTasksTC = (todolistId: string): AppThunk => (dispatch: AppDispatch) => {
//     dispatch(appActions.setAppStatusAC({status: 'loading'}))
//     todolistAPI.getTask(todolistId)
//         .then((res) => {
//             const tasks = res.data.items
//             dispatch(tasksActions.setTasksAC({todolistId, tasks}))
//             dispatch(appActions.setAppStatusAC({status: 'succeeded'}))
//         })
//         .catch((error) => {
//             handleServerNetworkError(error, dispatch)
//         })
// }
export const removeTaskTC = (todolistId: string, taskId: string): AppThunk => (dispatch: AppDispatch) => {
    dispatch(appActions.setAppStatusAC({status: 'loading'}))
    dispatch(tasksActions.changeTaskEntityStatusAC({todolistId, taskId, entityStatus: 'loading'}))
    todolistAPI.deleteTask(todolistId, taskId)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(tasksActions.removeTaskAC({taskId, todolistId}))
                dispatch(appActions.setAppStatusAC({status: 'succeeded'}))
            } else {
                handleServerAppError(res.data, dispatch)
            }
        })
        .catch((error) => {
            handleServerNetworkError(error, dispatch)
        })
}
// export const addTaskTC = (todolistId: string, title: string): AppThunk => (dispatch: AppDispatch) => {
//     dispatch(appActions.setAppStatusAC({status: 'loading'}))
//     todolistAPI.createTask(todolistId, title)
//         .then((res) => {
//             if (res.data.resultCode === 0) {
//                 dispatch(tasksActions.addTaskAC({task: res.data.data.item}))
//                 dispatch(appActions.setAppStatusAC({status: 'succeeded'}))
//             } else {
//                 handleServerAppError(res.data, dispatch)
//             }
//         })
//         .catch((error) => {
//             handleServerNetworkError(error, dispatch)
//         })
// }
// export const updateTaskTC = (taskId: string, todolistId: string, domainModel: UpdateDomainTaskModelType): AppThunk => (dispatch: AppDispatch, getState: () => AppStateType) => {
//     const allTasksFromState = getState().tasks
//     const tasksForCurrentTodolist = allTasksFromState[todolistId]
//     const task = tasksForCurrentTodolist.find(t => t.id === taskId)
//     if (!task) {
//         console.warn('task not found in the state')
//         return
//     }
//     const apiModel: UpdateTaskModelType = {
//         title: task.title,
//         startDate: task.startDate,
//         priority: task.priority,
//         description: task.description,
//         deadline: task.deadline,
//         status: task.status,
//         ...domainModel
//     }
//     dispatch(appActions.setAppStatusAC({status: 'loading'}))
//     todolistAPI.updateTask(todolistId, taskId, apiModel)
//         .then(res => {
//             if (res.data.resultCode === 0) {
//                 dispatch(tasksActions.updateTaskAC({taskId, domainModel, todolistId}))
//                 dispatch(appActions.setAppStatusAC({status: 'succeeded'}))
//             } else {
//                 handleServerAppError(res.data, dispatch)
//             }
//         })
//         .catch((error) => {
//             handleServerNetworkError(error, dispatch)
//         })
// }






