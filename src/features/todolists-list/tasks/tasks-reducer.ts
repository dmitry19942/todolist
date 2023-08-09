import {appActions, RequestStatusType} from "../../../app/app-reducer";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {todolistsThunks} from "../todolists/todolists-reducer";
import {createAppAsyncThunk} from "../../../common/utils";
import {clearTasksAndTodolists} from "../../../common/actions";
import {ResultCode, TaskPriorities, TaskStatuses} from "../../../common/enums";
import {AddTaskArgType, RemoveTaskArgType, tasksApi, TaskType, UpdateTaskModelType} from "./tasks-api";


// state

const fetchTasks = createAppAsyncThunk<{ tasks: TaskType[], todolistId: string }, string>
('tasks/fetchTasks', async (todolistId: string) => {
        const res = await tasksApi.getTasks(todolistId)
        const tasks = res.data.items
        return {tasks, todolistId}
})

const addTask = createAppAsyncThunk<{ task: TaskType }, AddTaskArgType>
('tasks/addTask', async (arg, {rejectWithValue}) => {
        const res = await tasksApi.createTask(arg)
        const task = res.data.data.item
        if (res.data.resultCode === ResultCode.Success) {
            return {task}
        } else {
            return rejectWithValue({data: res.data, showGlobalError: false})
        }
})

const updateTask = createAppAsyncThunk<UpdateTaskArgType, UpdateTaskArgType>
('tasks/updateTask', async (arg, thunkAPI) => {
    const {dispatch, rejectWithValue, getState} = thunkAPI
        const tasksForCurrentTodolist = getState().tasks[arg.todolistId]
        const task = tasksForCurrentTodolist.find(t => t.id === arg.taskId)
        if (!task) {
            dispatch(appActions.setAppError({error: 'Task not found in the state'}))
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
        const res = await tasksApi.updateTask(arg.todolistId, arg.taskId, apiModel)
        if (res.data.resultCode === ResultCode.Success) {
            return arg
        } else {
            return rejectWithValue({data: res.data, showGlobalError: true})
        }
})

const removeTask = createAppAsyncThunk<RemoveTaskArgType, RemoveTaskArgType>
('tasks/removeTask', async (arg, {dispatch, rejectWithValue}) => {
        dispatch(tasksActions.changeTaskEntityStatusAC({todolistId: arg.todolistId, taskId: arg.taskId, entityStatus: 'loading'}))
        const res = await tasksApi.deleteTask(arg)
        if (res.data.resultCode === ResultCode.Success) {
            return arg
        } else {
            return rejectWithValue({data: res.data, showGlobalError: true})
        }
})

const initialState: TasksStateType = {}

const slice = createSlice({
        name: 'tasks',
        initialState,
        reducers: {
            changeTaskEntityStatusAC(state, action: PayloadAction<{ todolistId: string, taskId: string, entityStatus: RequestStatusType }>) {
                const tasks = state[action.payload.todolistId]
                const index = tasks.findIndex(t => t.id === action.payload.taskId)
                if (index > -1) {
                    tasks[index] = {...tasks[index], entityStatus: action.payload.entityStatus}
                }
            }
        },
        extraReducers: builder => {
            builder
                .addCase(fetchTasks.fulfilled, (state, action) => {
                    state[action.payload.todolistId] = action.payload.tasks
                })
                .addCase(addTask.fulfilled, (state, action) => {
                    state[action.payload.task.todoListId].unshift(action.payload.task)
                })
                .addCase(updateTask.fulfilled, (state, action) => {
                    const tasks = state[action.payload.todolistId]
                    const index = tasks.findIndex(t => t.id === action.payload.taskId)
                    if (index !== -1) {
                        tasks[index] = {...tasks[index], ...action.payload.domainModel}
                    }
                })
                .addCase(removeTask.fulfilled, (state, action) => {
                    const tasks = state[action.payload.todolistId]
                    const index = tasks.findIndex(t => t.id === action.payload.taskId)
                    if (index !== -1) {
                        tasks.splice(index, 1)
                    }
                })
                .addCase(todolistsThunks.addTodolist.fulfilled, (state, action) => {
                    state[action.payload.todolist.id] = []
                })
                .addCase(todolistsThunks.removeTodolist.fulfilled, (state, action) => {
                    delete state[action.payload.todolistId]
                })
                .addCase(todolistsThunks.fetchTodolists.fulfilled, (state, action) => {
                    action.payload.todolists.forEach((tl) => {
                        state[tl.id] = []
                    })
                })
                .addCase(clearTasksAndTodolists, () => {
                    return {}
                })
        }
    }
)

export const tasksReducer = slice.reducer;

export const tasksThunks = {fetchTasks, addTask, updateTask, removeTask}

export const tasksActions = slice.actions

//types
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






