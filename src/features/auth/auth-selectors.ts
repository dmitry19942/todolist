import {AppStateType} from "../../app/store";

export const selectIsLoggedIn = (state: AppStateType) => state.auth.isLoggedIn
export const selectCaptcha = (state: AppStateType) => state.auth.captcha
