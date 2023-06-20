import {AppStateType} from "./store";

export const selectIsInitialized = (state: AppStateType) => state.app.isInitialized
export const selectStatus = (state: AppStateType) => state.app.status
export const selectError = (state: AppStateType) => state.app.error