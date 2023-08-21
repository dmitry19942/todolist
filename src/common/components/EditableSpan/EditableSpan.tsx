import React, {FC, memo} from 'react';
import TextField from '@mui/material/TextField';
import {useEditableSpan} from "../../hooks";

type PropsType = {
    title: string
    changeTitle: (title: string) => void
    disabled?: boolean
}

export const EditableSpan: FC<PropsType> = memo(({title, changeTitle, disabled = false}) => {

    const {
        editMode,
        newTitle,
        onEditMode,
        offEditMode,
        changeTitleHandler,
        onKeyPressOffEditMode
    } = useEditableSpan(title, changeTitle, disabled)

    return (
        editMode
            ? <TextField
                onChange={changeTitleHandler}
                value={newTitle}
                onBlur={offEditMode}
                autoFocus
                onKeyPress={onKeyPressOffEditMode}
            />
            : <span onDoubleClick={onEditMode}>{title}</span>

    )
})