import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import { AddBox } from '@mui/icons-material';

type AddItemFormPropsType = {
    addItem: (title: string) => void
    disabled?: boolean
}

export const AddItemForm = React.memo(({addItem, disabled = false}: AddItemFormPropsType) => {
    let [newTaskTitle, setNewTaskTitle] = useState<string>("")
    let [error, setError] = useState<boolean>(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(false)
        setNewTaskTitle(e.currentTarget.value)
    }

    const addTask = () => {
        if (newTaskTitle.trim() !== '') {
            addItem(newTaskTitle.trim());
        } else {
            setError(true);
        }
        setNewTaskTitle('')
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTask();
        }
    }

    return (
        <div>
            <TextField
                value={newTaskTitle}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
                disabled={disabled}
                size={'small'}
                error={error}
                helperText={error && 'Title is required!'}
                label={'Title'}
                variant={'outlined'}
            />
            <IconButton
                onClick={addTask}
                color={'primary'}
                disabled={disabled}
            >
                <AddBox/>
            </IconButton>
        </div>
    )
})