import React, {FC, memo} from "react";
import {EditableSpan} from "../../../../../common/components";
import IconButton from "@mui/material/IconButton";
import {Delete} from "@mui/icons-material";
import {useActions} from "../../../../../common/hooks";
import {TodolistDomainType, todolistsThunks} from "../../todolists-reducer";

type PropsType = {
    todolist: TodolistDomainType
}

export const TodolistTitle: FC<PropsType> = memo(({todolist}) => {

    const {removeTodolist, changeTodolistTitle} = useActions(todolistsThunks)

    const removeTodolistHandler = () => {
        removeTodolist(todolist.id);
    }

    const changeTodolistTitleHandler = (title: string) => {
        changeTodolistTitle({todolistId: todolist.id, title})
    }

    return (
        <h3><EditableSpan title={todolist.title} changeTitle={changeTodolistTitleHandler}
                          disabled={todolist.entityStatus === 'loading'}/>
            <IconButton onClick={removeTodolistHandler} disabled={todolist.entityStatus === 'loading'}>
                <Delete/>
            </IconButton>
        </h3>
    )
})