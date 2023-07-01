import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': 'a1c29d8b-1c83-4c49-8a4c-55a3c1e75564'
    }
})