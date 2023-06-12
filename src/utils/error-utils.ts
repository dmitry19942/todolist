import { Dispatch } from 'redux'
import {ResponseType} from '../api/todolist-api'
import {appActions} from "../app/app-reducer";

// generic function
export const handleServerAppError = <D>(data: ResponseType<D>, dispatch: ErrorUtilsDispatchType) => {
    if (data.messages.length) {
        dispatch(appActions.setAppErrorAC({error: data.messages[0]}))
    } else {
        dispatch(appActions.setAppErrorAC({error: 'Some error occurred'}))
    }
    dispatch(appActions.setAppStatusAC({status: 'failed'}))
}

export const handleServerNetworkError = (error: {message: string}, dispatch: ErrorUtilsDispatchType) => {
    dispatch(appActions.setAppErrorAC({error: error.message ? error.message : 'Some error occurred'}))
    dispatch(appActions.setAppStatusAC({status: 'failed'}))
}

type ErrorUtilsDispatchType = Dispatch<ReturnType<typeof appActions.setAppErrorAC > | ReturnType<typeof appActions.setAppStatusAC>>