import {AppDispatch, AppThunk} from "./store";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {authActions} from "../features/Auth/auth-reducer";
import {handleServerAppError} from "../common/utils";
import {handleServerNetworkError} from "../common/utils";
import {ResultCode} from "../common/enums";
import { authAPI } from "../features/Auth/auth-api";

// types
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type InitialStateType = {
    status: RequestStatusType
    error: string | null
    isInitialized: boolean
}

// state
const initialState: InitialStateType = {
    status: 'idle',
    error: null,
    isInitialized: false
}

const slice = createSlice({
        name: 'app',
        initialState: initialState,
        reducers: {
            setAppStatusAC(state, action: PayloadAction<{ status: RequestStatusType }>) {
                state.status = action.payload.status
            },
            setAppErrorAC(state, action: PayloadAction<{ error: string | null }>) {
                state.error = action.payload.error
            },
            setIsInitializedAC(state, action: PayloadAction<{ isInitialized: boolean }>) {
                state.isInitialized = action.payload.isInitialized
            }
        }
    }
)

export const appReducer = slice.reducer

export const appActions = slice.actions

// thunks
export const initializeAppTC = (): AppThunk => (dispatch: AppDispatch) => {
    authAPI.me().then((res) => {
        dispatch(appActions.setIsInitializedAC({isInitialized: true}))
        if (res.data.resultCode === ResultCode.Success) {
            dispatch(authActions.setIsLoggedInAC({isLoggedIn: true}))
        } else {
            handleServerAppError(res.data, dispatch)
        }
    })
        .catch((error) => {
            handleServerNetworkError(error, dispatch)
        })
}

