import {createSlice} from "@reduxjs/toolkit";
import {appActions} from "../../app/app-reducer";
import {clearTasksAndTodolists} from "../../common/actions";
import {createAppAsyncThunk, handleServerAppError} from "../../common/utils";
import {handleServerNetworkError} from "../../common/utils";
import {authAPI, LoginParamsType} from "./auth-api";
import {ResultCode} from "../../common/enums";

//state

const login = createAppAsyncThunk<{ isLoggedIn: boolean }, LoginParamsType>
('auth/login', async (arg, thunkAPI) => {
    const {dispatch, rejectWithValue} = thunkAPI
    try {
        dispatch(appActions.setAppStatusAC({status: 'loading'}))
        const res = await authAPI.login(arg)
        if (res.data.resultCode === ResultCode.Success) {
            dispatch(appActions.setAppStatusAC({status: 'succeeded'}))
            return {isLoggedIn: true}
        } else {
            handleServerAppError(res.data, dispatch)
            return rejectWithValue(res.data)
        }
    } catch (e) {
        handleServerNetworkError(e, dispatch)
        return rejectWithValue(null)
    }
})

const logout = createAppAsyncThunk<{ isLoggedIn: boolean }, void>
('auth/logout', async (_, thunkAPI) => {
    const {dispatch, rejectWithValue} = thunkAPI
    try {
        dispatch(appActions.setAppStatusAC({status: 'loading'}))
        const res = await authAPI.logout()
        if (res.data.resultCode === ResultCode.Success) {
            dispatch(appActions.setAppStatusAC({status: 'succeeded'}))
            dispatch(clearTasksAndTodolists())
            return {isLoggedIn: false}
        } else {
            handleServerAppError(res.data, dispatch)
            return rejectWithValue(res.data)
        }
    } catch (e) {
        handleServerNetworkError(e, dispatch)
        return rejectWithValue(null)
    }
})

const initializeApp = createAppAsyncThunk<{ isLoggedIn: true }, void>
('app/initializeApp', async (_, thunkAPI) => {
    const {dispatch, rejectWithValue} = thunkAPI
    try {
        const res = await authAPI.me()
        if (res.data.resultCode === ResultCode.Success) {
            return {isLoggedIn: true}
        } else {
            return rejectWithValue(null)
        }
    } catch (e) {
        handleServerNetworkError(e, dispatch)
        return rejectWithValue(null)
    } finally {
        dispatch(appActions.setIsInitializedAC({isInitialized: true}))
    }
})

const initialState = {
    isLoggedIn: false
}

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(authThunks.login.fulfilled, (state, action) => {
                state.isLoggedIn = action.payload.isLoggedIn
            })
            .addCase(authThunks.logout.fulfilled, (state, action) => {
                state.isLoggedIn = action.payload.isLoggedIn
            })
            .addCase(authThunks.initializeApp.fulfilled, (state, action) => {
                state.isLoggedIn = action.payload.isLoggedIn
            })
    }
})

export const authReducer = slice.reducer
export const authThunks = {login, logout, initializeApp}



