import React, {FC, memo} from "react";
import {EditableSpan} from "../../../../../common/components";
import IconButton from "@mui/material/IconButton";
import {Delete} from "@mui/icons-material";
import {TodolistDomainType} from "../../todolists-reducer";
import {useTodolistTitle} from "../../../../../common/hooks";

type PropsType = {
    todolist: TodolistDomainType
}

export const TodolistTitle: FC<PropsType> = memo(({todolist}) => {

    const {changeTodolistTitleHandler, removeTodolistHandler} = useTodolistTitle(todolist)

    return (
        <h3>
            <EditableSpan title={todolist.title} changeTitle={changeTodolistTitleHandler}
                          disabled={todolist.entityStatus === 'loading'}/>
            <IconButton onClick={removeTodolistHandler} disabled={todolist.entityStatus === 'loading'}>
                <Delete/>
            </IconButton>
        </h3>
    )
})