import React, {FC, memo} from 'react'
import Button from "@mui/material/Button";
import {FilterValuesType, TodolistDomainType, todolistsActions} from "../../todolists-reducer";
import {useActions} from "../../../../../common/hooks";

type PropsType = {
    todolist: TodolistDomainType
}
export const FilterTasksButtons: FC<PropsType> = memo(({todolist}) => {

    const {changeTodolistFilter} = useActions(todolistsActions)

    const changeFilterHandler = (filter: FilterValuesType) => {
        changeTodolistFilter({todolistId: todolist.id, filter})
    }

    return (
        <div>
            <Button variant={todolist.filter === 'all' ? 'outlined' : 'text'}
                    onClick={() => changeFilterHandler('all')}
                    color={'inherit'}
            >All
            </Button>
            <Button variant={todolist.filter === 'active' ? 'outlined' : 'text'}
                    onClick={() => changeFilterHandler('active')}
                    color={'primary'}>Active
            </Button>
            <Button variant={todolist.filter === 'completed' ? 'outlined' : 'text'}
                    onClick={() => changeFilterHandler('completed')}
                    color={'secondary'}>Completed
            </Button>
        </div>
    )
})