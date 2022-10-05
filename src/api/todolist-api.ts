import axios from 'axios'

export type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}

export type ResponseType<D> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': 'a1c29d8b-1c83-4c49-8a4c-55a3c1e75564'
    }
})


export const todolistAPI = {
    getTodolist() {
        const promise = instance.get<Array<TodolistType>>('todo-lists')
        return promise
    },
    createTodolist(title: string) {
        const promise = instance.post<ResponseType<{item: TodolistType}>>('todo-lists',
            { title: title })
        return promise
    },
    deleteTodolist(todolistId: string) {
        const promise = instance.delete<ResponseType<{}>>(`todo-lists/${todolistId}`)
        return promise
    },
    updateTodolist(todolistId: string, title: string) {
        const promise = instance.put<ResponseType<{}>>(
            `todo-lists/${todolistId}`,
            { title: title }
        )
        return promise
    },
}