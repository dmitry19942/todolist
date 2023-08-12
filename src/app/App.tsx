import React, {useEffect} from 'react';
import './App.css';
import {useSelector} from "react-redux";
import {ErrorSnackbar} from "../common/components";
import {CircularProgress} from "@mui/material";
import {authThunks} from '../features/auth/auth-reducer';
import {selectIsInitialized} from "./app-selectors";
import {useActions} from "../common/hooks";
import {Header} from "../common/components";
import {Routing} from "../common/components";


const App = () => {

    const isInitialized = useSelector(selectIsInitialized)

    const {initializeApp} = useActions(authThunks)

    useEffect(() => {
        initializeApp({})
    }, [])


    if (!isInitialized) {
        return <div
            style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
            <CircularProgress />
        </div>
    }

    return (
        <div className="App">
            <ErrorSnackbar />
            <Header />
            <Routing />
        </div>
    );
}

export default App;


