import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import TextField from '@mui/material/TextField';

type EditableSpanPropsType = {
    title: string
    changeTitle: (title: string) => void
    disabled?: boolean
}

export const EditableSpan = React.memo( ({title, changeTitle, disabled = false}: EditableSpanPropsType)  => {
    let [editMode, setEditMode] = useState<boolean>(false)
    let [newTitle, setNewTitle] = useState<string>(title)

    const changeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }
    const onEditMode = () => {
        if (disabled) {
            return
        }
        setEditMode(true)
    }
    const offEditMode = () => {
        setEditMode(false)
        changeTitle(newTitle)
    }

    const onKeyPressOffEditMode = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            offEditMode();
        }
    }

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