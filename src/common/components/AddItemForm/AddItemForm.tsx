import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import {AddBox} from '@mui/icons-material';
import {ResponseType} from "../../types";

type AddItemFormPropsType = {
    addItem: (title: string) => Promise<any>
    disabled?: boolean
}

export const AddItemForm = React.memo(({addItem, disabled = false}: AddItemFormPropsType) => {
    let [title, setTitle] = useState<string>('')
    let [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const addItemHandler = () => {
        if (title.trim() !== '') {
            addItem(title)
                .then(() => {
                    setTitle('')
                })
                .catch((res: ResponseType) => {
                    setError(res.messages[0])
                })
        } else {
            setError('Title is required');
        }
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (error !== null) {
            setError(null);
        }
        if (e.key === 'Enter') {
            addItemHandler();
        }
    }

    return (
        <div>
            <TextField
                value={title}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
                disabled={disabled}
                size={'small'}
                error={!!error}
                helperText={error}
                label={'Title'}
                variant={'outlined'}
            />
            <IconButton
                onClick={addItemHandler}
                color={'primary'}
                disabled={disabled}
            >
                <AddBox/>
            </IconButton>
        </div>
    )
})