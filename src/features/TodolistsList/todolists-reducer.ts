import {todolistAPI, TodolistType} from "../../api/todolist-api";
import {appActions, RequestStatusType} from "../../app/app-reducer";
import {handleServerAppError, handleServerNetworkError} from "../../utils/error-utils";
import {fetchTasksTC} from "./tasks-reducer";
import {AppDispatch, AppThunk} from "../../app/store";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

// types
export type FilterValuesType = "all" | "active" | "completed";
export type TodolistDomainType = TodolistType & {
    filter: FilterValuesType,
    entityStatus: RequestStatusType
}

//state
const initialState: Array<TodolistDomainType> = []

const slice = createSlice({
        name: 'todolists',
        initialState: initialState,
        reducers: {
            removeTodolistAC(state, action: PayloadAction<{ todolistId: string }>) {
                const index = state.findIndex(tl => tl.id === action.payload.todolistId)
                if (index > -1) {
                    state.splice(index, 1)
                }
            },
            addTodolistAC(state, action: PayloadAction<{ todolist: TodolistType }>) {
                state.unshift({...action.payload.todolist, filter: 'all', entityStatus: "idle"})
            },
            changeTodolistTitleAC(state, action: PayloadAction<{ todolistId: string, title: string }>) {
                const index = state.findIndex(tl => tl.id === action.payload.todolistId)
                state[index].title = action.payload.title
            },
            changeTodolistFilterAC(state, action: PayloadAction<{ todolistId: string, filter: FilterValuesType }>) {
                const index = state.findIndex(tl => tl.id === action.payload.todolistId)
                state[index].filter = action.payload.filter
            },
            setTodolistsAC(state, action: PayloadAction<{ todolists: Array<TodolistType> }>) {
                return action.payload.todolists.map(tl => ({...tl, filter: 'all', entityStatus: 'idle'}))
            },
            changeTodolistEntityStatusAC(state, action: PayloadAction<{ todolistId: string, entityStatus: RequestStatusType }>) {
                const index = state.findIndex(tl => tl.id === action.payload.todolistId)
                state[index].entityStatus = action.payload.entityStatus
            },
            clearTodolistDataAC() {
                return []
            }
        }
    }
)
export const todolistsReducer = slice.reducer

export const todolistsActions = slice.actions

// thunks
export const fetchTodolistsTC = (): AppThunk => (dispatch: AppDispatch) => {
    dispatch(appActions.setAppStatusAC({status: 'loading'}))
    todolistAPI.getTodolist()
        .then((res) => {
            dispatch(todolistsActions.setTodolistsAC({todolists: res.data}))
            dispatch(appActions.setAppStatusAC({status: 'succeeded'}))
            return res.data
        })
        .then((todos) => {
            todos.forEach((tl) => {
                dispatch(fetchTasksTC(tl.id))
            })
        })
        .catch((error) => {
            handleServerNetworkError(error, dispatch)
        })
}
export const removeTodolistTC = (todolistId: string): AppThunk => (dispatch: AppDispatch) => {
    dispatch(appActions.setAppStatusAC({status: 'loading'}))
    dispatch(todolistsActions.changeTodolistEntityStatusAC({todolistId: todolistId, entityStatus: 'loading'}))
    todolistAPI.deleteTodolist(todolistId)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(todolistsActions.removeTodolistAC({todolistId: todolistId}))
                dispatch(appActions.setAppStatusAC({status: 'succeeded'}))
            } else {
                handleServerAppError(res.data, dispatch)
            }
        })
        .catch((error) => {
            handleServerNetworkError(error, dispatch)
        })
}
export const addTodolistTC = (title: string): AppThunk => (dispatch: AppDispatch) => {
    dispatch(appActions.setAppStatusAC({status: 'loading'}))
    todolistAPI.createTodolist(title)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(todolistsActions.addTodolistAC({todolist: res.data.data.item}))
                dispatch(appActions.setAppStatusAC({status: 'succeeded'}))
            } else {
                handleServerAppError(res.data, dispatch)
            }
        })
        .catch((error) => {
            handleServerNetworkError(error, dispatch)
        })
}
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