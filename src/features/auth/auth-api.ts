import {AxiosResponse} from "axios";
import {ResponseType} from "../../common/types";
import {instance} from "../../common/api";


export const authAPI = {
    login(payload: LoginParamsType) {
        return instance.post<LoginParamsType, AxiosResponse<ResponseType<{ userId?: number }>>>(
            'auth/login', payload)
    },
    logout() {
        return instance.delete<ResponseType>('auth/login')
    },
    me() {
        return instance.get<ResponseType<GetAuthMeType>>('auth/me')
    }
}

export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string
}
type GetAuthMeType = {
    id: number
    email: string
    login: string
}