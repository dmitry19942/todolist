import {
    addTodolistAC,
    clearTodolistDataAC,
    removeTodolistAC,
    setTodolistsAC
} from "./todolists-reducer";
import {AppDispatch, AppStateType, AppThunk} from "../../app/store";
import {RequestStatusType, setAppStatusAC} from "../../app/app-reducer";
import {
    TaskPriorities,
    TaskStatuses,
    TaskType,
    todolistAPI,
    UpdateTaskModelType
} from "../../api/todolist-api";
import {handleServerAppError, handleServerNetworkError} from "../../utils/error-utils";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

// types
export type UpdateDomainTaskModelType = {
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

// state
const initialState: TasksStateType = {}

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
            addTaskAC(state, action: PayloadAction<{ task: TaskType }>) {
                state[action.payload.task.todoListId].unshift(action.payload.task)
            },
            updateTaskAC(state, action: PayloadAction<{ taskId: string, domainModel: UpdateDomainTaskModelType, todolistId: string }>) {
                const tasks = state[action.payload.todolistId]
                const index = tasks.findIndex(t => t.id === action.payload.taskId)
                if (index > -1) {
                    tasks[index] = {...tasks[index], ...action.payload.domainModel}
                }
            },
            setTasksAC(state, action: PayloadAction<{ todolistId: string, tasks: Array<TaskType> }>) {
                state[action.payload.todolistId] = action.payload.tasks
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
            builder.addCase(addTodolistAC, (state, action) => {
                state[action.payload.todolist.id] = []
            })
            builder.addCase(removeTodolistAC, (state, action) => {
                delete state[action.payload.todolistId]
            })
            builder.addCase(setTodolistsAC, (state, action) => {
                action.payload.todolists.forEach((tl) => {
                    state[tl.id] = []
                })
            })
            builder.addCase(clearTodolistDataAC, () => {
                return {}
            })
        }
    }
)

export const tasksReducer =slice.reducer;

export const {removeTaskAC, addTaskAC, updateTaskAC, setTasksAC, changeTaskEntityStatusAC} = slice.actions

// thunks
export const fetchTasksTC = (todolistId: string): AppThunk => (dispatch: AppDispatch) => {
    dispatch(setAppStatusAC({status: 'loading'}))
    todolistAPI.getTask(todolistId)
        .then((res) => {
            const tasks = res.data.items
            dispatch(setTasksAC({todolistId, tasks}))
            dispatch(setAppStatusAC({status: 'succeeded'}))
        })
        .catch((error) => {
            handleServerNetworkError(error, dispatch)
        })
}
export const removeTaskTC = (todolistId: string, taskId: string): AppThunk => (dispatch: AppDispatch) => {
    dispatch(setAppStatusAC({status: 'loading'}))
    dispatch(changeTaskEntityStatusAC({todolistId, taskId, entityStatus: 'loading'}))
    todolistAPI.deleteTask(todolistId, taskId)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(removeTaskAC({taskId, todolistId}))
                dispatch(setAppStatusAC({status: 'succeeded'}))
            } else {
                handleServerAppError(res.data, dispatch)
            }
        })
        .catch((error) => {
            handleServerNetworkError(error, dispatch)
        })
}
export const addTaskTC = (todolistId: string, title: string): AppThunk => (dispatch: AppDispatch) => {
    dispatch(setAppStatusAC({status: 'loading'}))
            todolistAPI.createTask(todolistId, title)
                .then((res) => {
                    if (res.data.resultCode === 0) {
                        dispatch(addTaskAC({task: res.data.data.item}))
                        dispatch(setAppStatusAC({status: 'succeeded'}))
                    } else {
                        handleServerAppError(res.data, dispatch)
                    }
                })
                .catch ((error) => {
            handleServerNetworkError(error, dispatch)
        })
}
export const updateTaskTC = (taskId: string, todolistId: string, domainModel: UpdateDomainTaskModelType): AppThunk => (dispatch: AppDispatch, getState: () => AppStateType) => {
        const allTasksFromState = getState().tasks
        const tasksForCurrentTodolist = allTasksFromState[todolistId]
        const task = tasksForCurrentTodolist.find(t => t.id === taskId)
        if (!task) {
            console.warn('task not found in the state')
            return
        }
        const apiModel: UpdateTaskModelType = {
            title: task.title,
            startDate: task.startDate,
            priority: task.priority,
            description: task.description,
            deadline: task.deadline,
            status: task.status,
            ...domainModel
        }
    dispatch(setAppStatusAC({status: 'loading'}))
        todolistAPI.updateTask(todolistId, taskId, apiModel)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(updateTaskAC({taskId, domainModel, todolistId}))
                    dispatch(setAppStatusAC({status: 'succeeded'}))
                } else {
                    handleServerAppError(res.data, dispatch)
                }
            })
            .catch((error) => {
                handleServerNetworkError(error, dispatch)
            })
}






