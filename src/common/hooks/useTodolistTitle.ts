import {useActions} from "./useActions";
import {TodolistDomainType, todolistsThunks} from "../../features/todolists-list/todolists/todolists-reducer";

export const useTodolistTitle = (todolist: TodolistDomainType) => {

    const {removeTodolist, changeTodolistTitle} = useActions(todolistsThunks)

    const removeTodolistHandler = () => {
        removeTodolist(todolist.id);
    }

    const changeTodolistTitleHandler = (title: string) => {
        changeTodolistTitle({todolistId: todolist.id, title})
    }

    return (
        {
            removeTodolistHandler,
            changeTodolistTitleHandler
        }
    )
}