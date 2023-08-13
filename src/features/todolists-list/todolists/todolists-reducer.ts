import {RequestStatusType} from "../../../app/app-reducer";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {clearTasksAndTodolists} from "../../../common/actions";
import {createAppAsyncThunk} from "../../../common/utils";
import {todolistAPI, TodolistType, UpdateTodolistTitleArgType} from "./todolist-api";
import { ResultCode } from "../../../common/enums";

// state

const fetchTodolists = createAppAsyncThunk<{ todolists: TodolistType[] }, void>
('todolists/fetchTodolists', async () => {
        const res = await todolistAPI.getTodolists()
        return {todolists: res.data}
})

const removeTodolist = createAppAsyncThunk<{ todolistId: string }, string>
('todolists/removeTodolist', async (todolistId, {dispatch, rejectWithValue}) => {
        dispatch(todolistsActions.changeTodolistEntityStatus({todolistId, entityStatus: 'loading'}))
        const res = await todolistAPI.deleteTodolist(todolistId)
        if (res.data.resultCode === ResultCode.Success) {
            return {todolistId}
        } else {
            return rejectWithValue({data: res.data, showGlobalError: true})
        }
})

const addTodolist = createAppAsyncThunk<{ todolist: TodolistType }, string>
('todolists/addTodolist', async (title, {rejectWithValue}) => {
        const res = await todolistAPI.createTodolist(title)
        if (res.data.resultCode === ResultCode.Success) {
            return {todolist: res.data.data.item}
        } else {
            return rejectWithValue({data: res.data, showGlobalError: false})
        }
})

const changeTodolistTitle = createAppAsyncThunk<UpdateTodolistTitleArgType, UpdateTodolistTitleArgType>
('todolists/changeTodolistTitle', async (arg, {rejectWithValue}) => {
        const res = await todolistAPI.updateTodolist(arg)
        if (res.data.resultCode === ResultCode.Success) {
            return arg
        } else {
            return rejectWithValue({data: res.data, showGlobalError: true})
        }
})

const initialState: Array<TodolistDomainType> = []

const slice = createSlice({
        name: 'todolists',
        initialState,
        reducers: {
            changeTodolistFilter(state, action: PayloadAction<{ todolistId: string, filter: FilterValuesType }>) {
                const index = state.findIndex(tl => tl.id === action.payload.todolistId)
                state[index].filter = action.payload.filter
            },
            changeTodolistEntityStatus(state, action: PayloadAction<{ todolistId: string, entityStatus: RequestStatusType }>) {
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