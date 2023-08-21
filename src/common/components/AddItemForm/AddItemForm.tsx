import React, {FC, memo} from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import {AddBox} from '@mui/icons-material';
import {useAddItemForm} from "../../hooks";

type PropsType = {
    addItem: (title: string) => Promise<any>
    disabled?: boolean
}

export const AddItemForm: FC<PropsType> = memo(({addItem, disabled = false}) => {

    const {title, onChangeHandler, onKeyPressHandler, error, addItemHandler} = useAddItemForm(addItem)

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