import React, {FC, memo} from "react";
import {Task} from "./Task/Task";
import {TaskType} from "../../../tasks/tasks-api";
import {TodolistDomainType} from "../../todolists-reducer";
import {useTasks} from "../../../../../common/hooks";

type PropsType = {
    todolist: TodolistDomainType
    tasks: TaskType[]
}

export const Tasks: FC<PropsType> = memo(({todolist, tasks}) => {

    const {tasksForTodolist} = useTasks(todolist, tasks)

    return (
        <>{tasksForTodolist.map(t => <Task task={t} todolistId={todolist.id} key={t.id}/>)}</>
    )
})