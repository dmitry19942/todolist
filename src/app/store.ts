import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {TasksActionsType, tasksReducer} from "../features/TodolistsList/tasks-reducer";
import {TodolistsActionsType, todolistsReducer} from "../features/TodolistsList/todolists-reducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {ActionsType, appReducer} from "./app-reducer";
import {authReducer, AuthActionsType} from "../features/Auth/auth-reducer";


const rootReducer = combineReducers({
    todolists: todolistsReducer,
    tasks: tasksReducer,
    app: appReducer,
    auth: authReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

type AppActionsType = AuthActionsType | ActionsType | TasksActionsType | TodolistsActionsType
export type AppRootStateType = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AppActionsType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>

// @ts-ignore
window.store = store