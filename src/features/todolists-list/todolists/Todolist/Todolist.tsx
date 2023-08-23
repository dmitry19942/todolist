import React, {FC, memo} from 'react';
import {AddItemForm} from "../../../../common/components";
import {TodolistDomainType} from "../todolists-reducer";
import { TaskType } from '../../tasks/tasks-api';
import {FilterTasksButtons} from "./FilterTasksButtons/FilterTasksButtons";
import {Tasks} from "./Tasks/Tasks";
import {TodolistTitle} from "./TodolistTitle/TodolistTitle";
import {useTodolist} from "../../../../common/hooks";

type PropsType = {
    todolist: TodolistDomainType
    tasks: TaskType[]
}

export const Todolist: FC<PropsType> = memo(({todolist, tasks}) => {

    const {addTaskCallback} = useTodolist(todolist)

    return <div>
        <TodolistTitle todolist={todolist}/>
        <AddItemForm addItem={addTaskCallback} disabled={todolist.entityStatus === 'loading'}/>
        <Tasks todolist={todolist} tasks={tasks} />
        <div style={{paddingTop: "10px"}}>
            <FilterTasksButtons todolist={todolist} />
        </div>
    </div>
})