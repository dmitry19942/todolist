import {AppDispatch, AppStateType} from '../../app/store';
import {handleServerNetworkError} from "./handle-server-network-error";
import {BaseThunkAPI} from "@reduxjs/toolkit/dist/createAsyncThunk";
import {appActions} from "../../app/app-reducer";
import {ResponseType} from "../types";


export const thunkTryCatch = async (thunkAPI: BaseThunkAPI<AppStateType, any, AppDispatch, null | ResponseType >, logic: Function) => {
    const {dispatch, rejectWithValue} = thunkAPI
    dispatch(appActions.setAppStatusAC({status: 'loading'}))
    try {
        return await logic()
    } catch (e) {
        handleServerNetworkError(e, dispatch)
        return rejectWithValue(null)
    } finally {
        dispatch(appActions.setAppStatusAC({status: 'idle'}))
    }
}