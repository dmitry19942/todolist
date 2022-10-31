import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import { AddBox } from '@mui/icons-material';

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export const AddItemForm = React.memo((props: AddItemFormPropsType) => {
    console.log('AddItemForm is called')
    let [newTaskTitle, setNewTaskTitle] = useState<string>("")
    let [error, setError] = useState<boolean>(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(false)
        setNewTaskTitle(e.currentTarget.value)
    }

    const addTask = () => {
        if (newTaskTitle.trim() !== '') {
            props.addItem(newTaskTitle.trim());
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
                size={'small'}
                error={error}
                helperText={error && 'Title is required!'}
                label={'Title'}
                variant={'outlined'}
            />
            <IconButton
                onClick={addTask}
                color={'primary'}
            >
                <AddBox/>
            </IconButton>
        </div>
    )
})