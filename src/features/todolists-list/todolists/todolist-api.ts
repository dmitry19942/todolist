import {AxiosResponse} from 'axios'
import { instance } from '../../../common/api';
import { ResponseType } from '../../../common/types';

// api
export const todolistAPI = {
    getTodolists() {
        return instance.get<Array<TodolistType>>('todo-lists')
    },
    createTodolist(title: string) {
        return instance.post<{ title: string }, AxiosResponse<ResponseType<{ item: TodolistType }>>>('todo-lists',
            {title: title})
    },
    deleteTodolist(todolistId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todolistId}`)
    },
    updateTodolist(arg: UpdateTodolistTitleArgType) {
        return instance.put<{ title: string }, AxiosResponse<ResponseType>>(`todo-lists/${arg.todolistId}`,
            {title: arg.title})
    },
}


// types
export type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}
export type UpdateTodolistTitleArgType = {
    todolistId: string
    title: string
}
