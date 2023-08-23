import {useSelector} from "react-redux";
import {selectError} from "../../app/app-selectors";
import {useActions} from "./useActions";
import {appActions} from "../../app/app-reducer";
import React from "react";

export const useErrorSnackbar = () => {

    const error = useSelector(selectError)

    const {setAppError} = useActions(appActions)

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }
        setAppError({error: null})
    }

    return (
        {
            error,
            handleClose
        }
    )
}