import { Dispatch } from 'redux'
import {ResponseType} from '../api/todolist-api'
import {appActions} from "../app/app-reducer";
import axios, {AxiosError} from "axios";

// generic function
export const handleServerAppError = <D>(data: ResponseType<D>, dispatch: ErrorUtilsDispatchType) => {
    if (data.messages.length) {
        dispatch(appActions.setAppErrorAC({error: data.messages[0]}))
    } else {
        dispatch(appActions.setAppErrorAC({error: 'Some error occurred'}))
    }
    dispatch(appActions.setAppStatusAC({status: 'failed'}))
}

export const handleServerNetworkError = (e: unknown, dispatch: Dispatch) => {
    const err = e as Error | AxiosError<{ error: string }>
    if (axios.isAxiosError(err)) {
        const error = err.message ? err.message : 'Some error occurred'
        dispatch(appActions.setAppErrorAC({error}))
    } else {
        dispatch(appActions.setAppErrorAC({error: `Native error ${err.message}`}))
    }

    dispatch(appActions.setAppStatusAC({status: 'failed'}))
}

type ErrorUtilsDispatchType = Dispatch<ReturnType<typeof appActions.setAppErrorAC > | ReturnType<typeof appActions.setAppStatusAC>>