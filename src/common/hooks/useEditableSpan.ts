import {ChangeEvent, KeyboardEvent, useState} from "react";

export const useEditableSpan = (title: string, changeTitle: (title: string) => void, disabled = false) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [newTitle, setNewTitle] = useState<string>(title)

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
        {
            editMode,
            newTitle,
            onEditMode,
            offEditMode,
            changeTitleHandler,
            onKeyPressOffEditMode
        }
    )
}