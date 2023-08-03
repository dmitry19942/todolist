import React, {FC, memo} from "react";
import {Task} from "./Task/Task";
import {TaskStatuses} from "../../../../../common/enums";
import {TaskType} from "../../../tasks/tasks-api";
import {TodolistDomainType} from "../../todolists-reducer";

type PropsType = {
    todolist: TodolistDomainType
    tasks: TaskType[]
}

export const Tasks: FC<PropsType> = memo(({tasks, todolist}) => {

    let tasksForTodolist = tasks

    if (todolist.filter === "active") {
        tasksForTodolist = tasks.filter(t => t.status === TaskStatuses.New);
    }
    if (todolist.filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.status === TaskStatuses.Completed);
    }

    return (
        <>{tasksForTodolist.map(t => <Task task={t} todolistId={todolist.id} key={t.id}/>)}</>
    )
})