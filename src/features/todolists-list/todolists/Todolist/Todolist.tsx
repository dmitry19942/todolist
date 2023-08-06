import React, {FC, memo, useEffect} from 'react';
import {AddItemForm} from "../../../../common/components";
import {TodolistDomainType} from "../todolists-reducer";
import {tasksThunks} from "../../tasks/tasks-reducer";
import {useActions} from "../../../../common/hooks";
import { TaskType } from '../../tasks/tasks-api';
import {FilterTasksButtons} from "./FilterTasksButtons/FilterTasksButtons";
import {Tasks} from "./Tasks/Tasks";
import {TodolistTitle} from "./TodolistTitle/TodolistTitle";

type PropsType = {
    todolist: TodolistDomainType
    tasks: TaskType[]
}

export const Todolist: FC<PropsType> = memo(({todolist, tasks}) => {

    const {fetchTasks, addTask} = useActions(tasksThunks)

    useEffect(() => {
        fetchTasks(todolist.id)
    }, [])

    const addTaskCallback = (title: string) => {
        return  addTask({todolistId: todolist.id, title}).unwrap()
    }

    return <div>
        <TodolistTitle todolist={todolist}/>
        <AddItemForm addItem={addTaskCallback} disabled={todolist.entityStatus === 'loading'}/>
        <Tasks todolist={todolist} tasks={tasks} />
        <div style={{paddingTop: "10px"}}>
            <FilterTasksButtons todolist={todolist} />
        </div>
    </div>
})