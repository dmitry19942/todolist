import {createSlice, PayloadAction} from "@reduxjs/toolkit";

// state

const initialState: InitialStateType = {
    status: 'idle',
    error: null,
    isInitialized: false
}

const slice = createSlice({
        name: 'app',
        initialState,
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


// types
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type InitialStateType = {
    status: RequestStatusType
    error: string | null
    isInitialized: boolean
}
