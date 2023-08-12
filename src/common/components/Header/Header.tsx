import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import {Menu} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import AppBar from "@mui/material/AppBar";
import React from "react";
import {useSelector} from "react-redux";
import {selectStatus} from "../../../app/app-selectors";
import {selectIsLoggedIn} from "../../../features/auth/auth-selectors";
import {useActions} from "../../hooks";
import {authThunks} from "../../../features/auth/auth-reducer";

export const Header = () => {

    const status = useSelector(selectStatus)
    const isLoggedIn = useSelector(selectIsLoggedIn)

    const {logout} = useActions(authThunks)

    const logoutHandler = () => logout({})

    return (
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
        )

}

