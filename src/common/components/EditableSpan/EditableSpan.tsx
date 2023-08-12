import React, {ChangeEvent, useState, KeyboardEvent, FC, memo} from 'react';
import TextField from '@mui/material/TextField';

type PropsType = {
    title: string
    changeTitle: (title: string) => void
    disabled?: boolean
}

export const EditableSpan: FC<PropsType> = memo(({title, changeTitle, disabled = false}) => {

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