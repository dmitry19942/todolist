import React, {useEffect} from 'react';
import './App.css';
import {TodolistsList} from "../features/todolists-list/TodolistsList";
import {useSelector} from "react-redux";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';
import {Menu} from '@mui/icons-material';
import {ErrorSnackbar} from "../common/components";
import {Routes, Route, Navigate} from 'react-router-dom'
import {CircularProgress} from "@mui/material";
import {authThunks} from '../features/auth/auth-reducer';
import {selectIsInitialized, selectStatus} from "./app-selectors";
import {selectIsLoggedIn} from "../features/auth/auth-selectors";
import {useActions} from "../common/hooks";
import {Login} from "../features/auth/Login";


function App() {

    const status = useSelector(selectStatus)
    const isInitialized = useSelector(selectIsInitialized)
    const isLoggedIn = useSelector(selectIsLoggedIn)

    const {initializeApp, logout} = useActions(authThunks)

    useEffect(() => {
        initializeApp({})
    }, [])

    const logoutHandler = () => logout({})


    if (!isInitialized) {
        return <div
            style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
            <CircularProgress/>
        </div>
    }

    return (
        <div className="App">
            <ErrorSnackbar/>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    {!isLoggedIn && <Button color="inherit">Login</Button>}
                    {isLoggedIn && <Button color='inherit' onClick={logoutHandler}>Logout</Button>}
                </Toolbar>
                {status === 'loading' && <LinearProgress/>}
            </AppBar>
            <Container fixed>
                <Routes>
                    <Route path = '/' element = {<TodolistsList />} />
                    <Route path = '/todolist' element = {<TodolistsList />} />
                    <Route path = '/login' element = {<Login />} />
                    <Route path = '/404' element = {<h1>404: PAGE NOT FOUND</h1>} />
                    <Route path = '*' element = {<Navigate to='/404'/> } />
                </Routes>
            </Container>
        </div>
    );
}

export default App;


