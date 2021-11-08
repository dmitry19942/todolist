import React, {ChangeEvent, useState, KeyboardEvent} from 'react';

type EditableSpanPropsType = {
    title: string
    changeTitle: (title: string) => void
}

export function EditableSpan(props: EditableSpanPropsType) {
    let [editMode, setEditMode] = useState<boolean>(false)
    let [title, setTitle] = useState<string>(props.title)

    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onEditMode = () => setEditMode(true)
    const offEditMode = () => {
        setEditMode(false)
        props.changeTitle(title)
    }

    const onKeyPressOffEditMode = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            offEditMode();
        }
    }

    return (
        editMode
            ? <input
                onChange={changeTitle}
                value={title}
                onBlur={offEditMode}
                autoFocus={true}
                onKeyPress={onKeyPressOffEditMode}
            />
            : <span onDoubleClick={onEditMode}>{props.title}</span>

    )
}