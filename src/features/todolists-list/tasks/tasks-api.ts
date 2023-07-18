import {AxiosResponse} from 'axios'
import { instance } from '../../../common/api';
import { ResponseType } from '../../../common/types';
import {TaskPriorities, TaskStatuses} from "../../../common/enums";
import {RequestStatusType} from "../../../app/app-reducer";

// api
export const tasksApi = {
    getTasks(todolistId: string) {
        return instance.get<GetTasksResponseType>(`todo-lists/${todolistId}/tasks`)
    },
    createTask(arg: AddTaskArgType) {
        return instance.post<{ title: string }, AxiosResponse<ResponseType<{ item: TaskType }>>>(
            `todo-lists/${arg.todolistId}/tasks`, {title: arg.title})
    },
    deleteTask(arg: RemoveTaskArgType) {
        return instance.delete<ResponseType>(`todo-lists/${arg.todolistId}/tasks/${arg.taskId}`)
    },
    updateTask(todolistId: string, taskId: string, model: UpdateTaskModelType) {
        return instance.put<UpdateTaskModelType, AxiosResponse<ResponseType<{ item: TaskType }>>>(
            `todo-lists/${todolistId}/tasks/${taskId}`, model)
    },
}


// types
export type TaskType = {
    id: string
    title: string
    description: string | null
    todoListId: string
    order: number
    status: TaskStatuses
    priority: TaskPriorities
    startDate: string | null
    deadline: string | null
    addedDate: string
    entityStatus: RequestStatusType
}
export type GetTasksResponseType = {
    items: Array<TaskType>
    totalCount: number
    error: string | null
}
export type UpdateTaskModelType = {
    title: string
    description: string | null
    status: TaskStatuses
    priority: TaskPriorities
    startDate: string | null
    deadline: string | null
}
export type AddTaskArgType = {
    todolistId: string
    title: string
}
export type RemoveTaskArgType = {
    todolistId: string
    taskId: string
}