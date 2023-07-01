import {appActions, RequestStatusType} from "../../app/app-reducer";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {clearTasksAndTodolists} from "../../common/actions";
import {createAppAsyncThunk} from "../../common/utils";
import {handleServerNetworkError} from "../../common/utils";
import {handleServerAppError} from "../../common/utils";
import {todolistAPI, TodolistType, UpdateTodolistTitleArgType} from "./todolist-api";
import { ResultCode } from "../../common/enums";


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

const removeTodolist = createAppAsyncThunk<{ todolistId: string }, string>
('todolists/removeTodolist', async (todolistId, thunkAPI) => {
    const {dispatch, rejectWithValue} = thunkAPI
    try {
        dispatch(appActions.setAppStatusAC({status: 'loading'}))
        dispatch(todolistsActions.changeTodolistEntityStatusAC({todolistId, entityStatus: 'loading'}))
        const res = await todolistAPI.deleteTodolist(todolistId)
        if (res.data.resultCode === ResultCode.Success) {
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

const addTodolist = createAppAsyncThunk<{ todolist: TodolistType }, string>
('todolists/addTodolist', async (title, thunkAPI) => {
    const {dispatch, rejectWithValue} = thunkAPI
    try {
        dispatch(appActions.setAppStatusAC({status: 'loading'}))
        const res = await todolistAPI.createTodolist(title)
        if (res.data.resultCode === ResultCode.Success) {
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

const changeTodolistTitle = createAppAsyncThunk<UpdateTodolistTitleArgType, UpdateTodolistTitleArgType>
('todolists/changeTodolistTitle', async (arg, thunkAPI) => {
    const {dispatch, rejectWithValue} = thunkAPI
    try {
        dispatch(appActions.setAppStatusAC({status: 'loading'}))
        const res = await todolistAPI.updateTodolist(arg)
        if (res.data.resultCode === ResultCode.Success) {
            dispatch(appActions.setAppStatusAC({status: 'succeeded'}))
            return arg
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
        initialState,
        reducers: {
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
                .addCase(changeTodolistTitle.fulfilled, (state, action) => {
                    const index = state.findIndex(tl => tl.id === action.payload.todolistId)
                    state[index].title = action.payload.title
                })
                .addCase(clearTasksAndTodolists, () => {
                    return []
                })
        }
    }
)
export const todolistsReducer = slice.reducer

export const todolistsThunks = {fetchTodolists, removeTodolist, addTodolist, changeTodolistTitle}

export const todolistsActions = slice.actions

// types
export type FilterValuesType = "all" | "active" | "completed";
export type TodolistDomainType = TodolistType & {
    filter: FilterValuesType,
    entityStatus: RequestStatusType
}