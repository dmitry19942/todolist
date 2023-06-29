import {todolistAPI, TodolistType} from "../../api/todolist-api";
import {appActions, RequestStatusType} from "../../app/app-reducer";
import {handleServerAppError, handleServerNetworkError} from "../../utils/error-utils";
import {AppDispatch, AppThunk} from "../../app/store";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {clearTasksAndTodolists} from "../../common/actions";
import {createAppAsyncThunk} from "../../utils/create-app-async-thunk";

// types
export type FilterValuesType = "all" | "active" | "completed";
export type TodolistDomainType = TodolistType & {
    filter: FilterValuesType,
    entityStatus: RequestStatusType
}

//state

const fetchTodolists = createAppAsyncThunk<{ todolists: TodolistType[] }, void>
('todolists/fetchTodolists', async (_, thunkAPI) => {
    const {dispatch, rejectWithValue} = thunkAPI
    try {
        dispatch(appActions.setAppStatusAC({status: 'loading'}))
        const res = await todolistAPI.getTodolists()
        dispatch(appActions.setAppStatusAC({status: 'succeeded'}))
        return {todolists: res.data}
    } catch (e) {
        handleServerNetworkError(e, dispatch)
        return rejectWithValue(null)
    }
})

const removeTodolist = createAppAsyncThunk<{todolistId: string}, string>
('todolists/removeTodolist', async (todolistId, thunkAPI) => {
    const {dispatch, rejectWithValue} = thunkAPI
    try {
        dispatch(appActions.setAppStatusAC({status: 'loading'}))
        dispatch(todolistsActions.changeTodolistEntityStatusAC({todolistId, entityStatus: 'loading'}))
        const res = await todolistAPI.deleteTodolist(todolistId)
        if (res.data.resultCode === 0) {
            dispatch(appActions.setAppStatusAC({status: 'succeeded'}))
            return {todolistId}
        } else {
            handleServerAppError(res.data, dispatch)
            return rejectWithValue(null)
        }
    } catch (e) {
        handleServerNetworkError(e, dispatch)
        return rejectWithValue(null)
    }
})

const addTodolist = createAppAsyncThunk<{todolist: TodolistType}, string>
('todolists/addTodolist', async (title, thunkAPI) => {
    const {dispatch, rejectWithValue} = thunkAPI
    try {
        dispatch(appActions.setAppStatusAC({status: 'loading'}))
        const res = await todolistAPI.createTodolist(title)
        if (res.data.resultCode === 0) {
            dispatch(appActions.setAppStatusAC({status: 'succeeded'}))
            return {todolist: res.data.data.item}
        } else {
            handleServerAppError(res.data, dispatch)
            return rejectWithValue(null)
        }
    } catch (e) {
        handleServerNetworkError(e, dispatch)
        return rejectWithValue(null)
    }
})

const initialState: Array<TodolistDomainType> = []

const slice = createSlice({
        name: 'todolists',
        initialState: initialState,
        reducers: {
            changeTodolistTitleAC(state, action: PayloadAction<{ todolistId: string, title: string }>) {
                const index = state.findIndex(tl => tl.id === action.payload.todolistId)
                state[index].title = action.payload.title
            },
            changeTodolistFilterAC(state, action: PayloadAction<{ todolistId: string, filter: FilterValuesType }>) {
                const index = state.findIndex(tl => tl.id === action.payload.todolistId)
                state[index].filter = action.payload.filter
            },
            changeTodolistEntityStatusAC(state, action: PayloadAction<{ todolistId: string, entityStatus: RequestStatusType }>) {
                const index = state.findIndex(tl => tl.id === action.payload.todolistId)
                state[index].entityStatus = action.payload.entityStatus
            }
        },
        extraReducers: builder => {
            builder
                .addCase(fetchTodolists.fulfilled, (state, action) => {
                    return action.payload.todolists.map(tl => ({...tl, filter: 'all', entityStatus: 'idle'}))
                })
                .addCase(removeTodolist.fulfilled, (state, action) => {
                    const index = state.findIndex(tl => tl.id === action.payload.todolistId)
                    if (index > -1) {
                        state.splice(index, 1)
                    }
                })
                .addCase(addTodolist.fulfilled, (state, action) => {
                    state.unshift({...action.payload.todolist, filter: 'all', entityStatus: "idle"})
                })
                .addCase(clearTasksAndTodolists, () => {
                    return []
                })
        }
    }
)
export const todolistsReducer = slice.reducer

export const todolistsThunks = {fetchTodolists, removeTodolist, addTodolist}

export const todolistsActions = slice.actions

// thunks
// export const fetchTodolistsTC = (): AppThunk => (dispatch: AppDispatch) => {
//     dispatch(appActions.setAppStatusAC({status: 'loading'}))
//     todolistAPI.getTodolist()
//         .then((res) => {
//             dispatch(todolistsActions.setTodolistsAC({todolists: res.data}))
//             dispatch(appActions.setAppStatusAC({status: 'succeeded'}))
//             return res.data
//         })
//         .then((todos) => {
//             todos.forEach((tl) => {
//                 dispatch(tasksThunks.fetchTasks(tl.id))
//             })
//         })
//         .catch((error) => {
//             handleServerNetworkError(error, dispatch)
//         })
// }
// export const removeTodolistTC = (todolistId: string): AppThunk => (dispatch: AppDispatch) => {
//     dispatch(appActions.setAppStatusAC({status: 'loading'}))
//     dispatch(todolistsActions.changeTodolistEntityStatusAC({todolistId: todolistId, entityStatus: 'loading'}))
//     todolistAPI.deleteTodolist(todolistId)
//         .then((res) => {
//             if (res.data.resultCode === 0) {
//                 dispatch(todolistsActions.removeTodolistAC({todolistId: todolistId}))
//                 dispatch(appActions.setAppStatusAC({status: 'succeeded'}))
//             } else {
//                 handleServerAppError(res.data, dispatch)
//             }
//         })
//         .catch((error) => {
//             handleServerNetworkError(error, dispatch)
//         })
// }
// export const addTodolistTC = (title: string): AppThunk => (dispatch: AppDispatch) => {
//     dispatch(appActions.setAppStatusAC({status: 'loading'}))
//     todolistAPI.createTodolist(title)
//         .then((res) => {
//             if (res.data.resultCode === 0) {
//                 dispatch(todolistsActions.addTodolistAC({todolist: res.data.data.item}))
//                 dispatch(appActions.setAppStatusAC({status: 'succeeded'}))
//             } else {
//                 handleServerAppError(res.data, dispatch)
//             }
//         })
//         .catch((error) => {
//             handleServerNetworkError(error, dispatch)
//         })
// }
export const updateTitleTodolistTC = (todolistId: string, title: string): AppThunk =>
    (dispatch: AppDispatch) => {
        dispatch(appActions.setAppStatusAC({status: 'loading'}))
        todolistAPI.updateTodolist(todolistId, title)
            .then((res) => {
                if (res.data.resultCode === 0) {
                    dispatch(todolistsActions.changeTodolistTitleAC({todolistId: todolistId, title: title}))
                    dispatch(appActions.setAppStatusAC({status: 'succeeded'}))
                } else {
                    handleServerAppError(res.data, dispatch)
                }
            })
            .catch((error) => {
                handleServerNetworkError(error, dispatch)
            })
    }