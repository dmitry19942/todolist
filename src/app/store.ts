import {combineReducers} from "redux";
import {tasksReducer} from "../features/TodolistsList/tasks-reducer";
import {todolistsReducer} from "../features/TodolistsList/todolists-reducer";
import thunk from "redux-thunk";
import {appReducer} from "./app-reducer";
import {authReducer} from "../features/Auth/auth-reducer";
import {configureStore} from "@reduxjs/toolkit";


const rootReducer = combineReducers({
    todolists: todolistsReducer,
    tasks: tasksReducer,
    app: appReducer,
    auth: authReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk)
})

export type AppStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


// @ts-ignore
window.store = store