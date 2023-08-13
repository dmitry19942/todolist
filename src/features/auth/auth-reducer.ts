import {createSlice} from "@reduxjs/toolkit";
import {appActions} from "../../app/app-reducer";
import {clearTasksAndTodolists} from "../../common/actions";
import {createAppAsyncThunk} from "../../common/utils";
import {authAPI, LoginParamsType} from "./auth-api";
import {ResultCode} from "../../common/enums";

// state

const login = createAppAsyncThunk<{ isLoggedIn: boolean }, LoginParamsType>
('auth/login', async (arg, {dispatch, rejectWithValue}) => {
    const res = await authAPI.login(arg)
    if (res.data.resultCode === ResultCode.Success) {
        return {isLoggedIn: true}
    } else {
        if (res.data.resultCode === ResultCode.Captcha) {
            dispatch(getCaptchaUrl())
        }
        const isShowAppError = !res.data.fieldsErrors.length
        return rejectWithValue({data: res.data, showGlobalError: isShowAppError})
    }
})

const logout = createAppAsyncThunk<{ isLoggedIn: boolean, captcha: null | string }, void>
('auth/logout', async (_, {dispatch, rejectWithValue}) => {
    const res = await authAPI.logout()
    if (res.data.resultCode === ResultCode.Success) {
        dispatch(clearTasksAndTodolists())
        return {isLoggedIn: false, captcha: null}
    } else {
        return rejectWithValue({data: res.data, showGlobalError: true})
    }
})

const initializeApp = createAppAsyncThunk<{ isLoggedIn: true }, void>
('app/initializeApp', async (_, {dispatch, rejectWithValue}) => {
    try {
        const res = await authAPI.me()
        if (res.data.resultCode === ResultCode.Success) {
            return {isLoggedIn: true}
        } else {
            return rejectWithValue({data: res.data, showGlobalError: false})
        }
    } finally {
        dispatch(appActions.setIsInitialized({isInitialized: true}))
    }
})

const getCaptchaUrl = createAppAsyncThunk<{ captcha: string }, void>
('auth/getCaptchaUrl', async (_, {rejectWithValue}) => {
    const res = await authAPI.getCaptchaUrl()
    const captchaUrl = res.data.url
    if (captchaUrl) {
        return {captcha: captchaUrl}
    } else {
        return rejectWithValue({data: res.data, showGlobalError: true})
    }
})

const initialState: InitialStateType = {
    isLoggedIn: false,
    captcha: null
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
                state.captcha = action.payload.captcha
            })
            .addCase(authThunks.initializeApp.fulfilled, (state, action) => {
                state.isLoggedIn = action.payload.isLoggedIn
            })
            .addCase(authThunks.getCaptchaUrl.fulfilled, (state, action) => {
                state.captcha = action.payload.captcha
            })
    }
})

export const authReducer = slice.reducer
export const authThunks = {login, logout, initializeApp, getCaptchaUrl}

// types
type InitialStateType = {
    isLoggedIn: boolean
    captcha: null | string
}


