import React, {FC, memo} from 'react'
import Button from "@mui/material/Button";
import {TodolistDomainType} from "../../todolists-reducer";
import {useFilterTasksButtons} from "../../../../../common/hooks";

type PropsType = {
    todolist: TodolistDomainType
}
export const FilterTasksButtons: FC<PropsType> = memo(({todolist}) => {

    const {changeFilterHandler} = useFilterTasksButtons(todolist)

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