import {useActions} from "./useActions";
import {
    FilterValuesType,
    TodolistDomainType,
    todolistsActions
} from "../../features/todolists-list/todolists/todolists-reducer";

export const useFilterTasksButtons = (todolist: TodolistDomainType) => {

    const {changeTodolistFilter} = useActions(todolistsActions)

    const changeFilterHandler = (filter: FilterValuesType) => {
        changeTodolistFilter({todolistId: todolist.id, filter})
    }

    return (
        {
            changeFilterHandler
        }
    )
}