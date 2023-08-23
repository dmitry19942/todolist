import {useActions} from "./useActions";
import {tasksThunks} from "../../features/todolists-list/tasks/tasks-reducer";
import {useEffect} from "react";
import {TodolistDomainType} from "../../features/todolists-list/todolists/todolists-reducer";

export const useTodolist = (todolist: TodolistDomainType, ) => {

    const {fetchTasks, addTask} = useActions(tasksThunks)

    useEffect(() => {
        fetchTasks(todolist.id)
    }, [])

    const addTaskCallback = (title: string) => {
        return  addTask({todolistId: todolist.id, title}).unwrap()
    }

    return (
        {
           addTaskCallback
        }
    )
}