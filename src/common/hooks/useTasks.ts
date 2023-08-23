import {TaskStatuses} from "../enums";
import {TodolistDomainType} from "../../features/todolists-list/todolists/todolists-reducer";
import {TaskType} from "../../features/todolists-list/tasks/tasks-api";

export const useTasks = (todolist: TodolistDomainType, tasks: TaskType[]) => {

    let tasksForTodolist = tasks

    if (todolist.filter === "active") {
        tasksForTodolist = tasks.filter(t => t.status === TaskStatuses.New);
    }
    if (todolist.filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.status === TaskStatuses.Completed);
    }

    return (
        {
            tasksForTodolist
        }
    )
}