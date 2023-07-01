import {Dispatch} from "redux";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {appActions} from "../../app/app-reducer";
import {clearTasksAndTodolists} from "../../common/actions";
import {handleServerAppError} from "../../common/utils";
import {handleServerNetworkError} from "../../common/utils";
import {authAPI, LoginParamsType} from "./auth-api";
import {ResultCode} from "../../common/enums";

//state
const initialState = {
    isLoggedIn: false
}

const slice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setIsLoggedInAC(state, action: PayloadAction<{isLoggedIn: boolean}>) {
            state.isLoggedIn = action.payload.isLoggedIn
        }
    }
})

export const authReducer = slice.reducer
export const authActions = slice.actions

// thunks

export const loginTC = (payload: LoginParamsType) => (dispatch: Dispatch) => {
    dispatch(appActions.setAppStatusAC({status: 'loading'}))
    authAPI.login(payload)
        .then((res) => {
            if (res.data.resultCode === ResultCode.Success) {
                dispatch(authActions.setIsLoggedInAC({isLoggedIn: true}))
                dispatch(appActions.setAppStatusAC({status: 'succeeded'}))
            } else {
                handleServerAppError(res.data, dispatch)
            }
        })
        .catch((error) => {
            handleServerNetworkError(error, dispatch)
        })
}

export const logoutTC = () => (dispatch: Dispatch) => {
    dispatch(appActions.setAppStatusAC({status: 'loading'}))
    authAPI.logout()
        .then((res) => {
            if (res.data.resultCode === ResultCode.Success) {
                dispatch(authActions.setIsLoggedInAC({isLoggedIn: false}))
                dispatch(appActions.setAppStatusAC({status: 'succeeded'}))
                dispatch(clearTasksAndTodolists())
            } else {
                handleServerAppError(res.data, dispatch)
            }
        })
        .catch((error) => {
            handleServerNetworkError(error, dispatch)
        })
}


