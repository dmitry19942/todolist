import React from "react";
import {useSelector} from "react-redux";
import {AddItemForm} from "../../common/components";
import {Todolist} from "./todolists/Todolist/Todolist";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {Navigate} from 'react-router-dom'
import {selectTasks} from "./tasks/tasks-selector";
import {selectTodolists} from "./todolists/todolists-selector";
import {useTodolistsList} from "../../common/hooks";

export const TodolistsList: React.FC = () => {

    const todolists = useSelector(selectTodolists)
    const tasks = useSelector(selectTasks)

    const {isLoggedIn, addTodolistCallback} = useTodolistsList()

    if (!isLoggedIn) {
        return <Navigate to={'/login'}/>
    }

    return <>
        <Grid container style={{padding: "20px"}}>
            <AddItemForm addItem={addTodolistCallback}/>
        </Grid>
        <Grid container spacing={3}>
            {
                todolists.map(tl => {
                    let allTodolistTasks = tasks[tl.id];

                    return <Grid item key={tl.id}>
                        <Paper style={{padding: "10px"}}>
                            <Todolist
                                todolist={tl}
                                tasks={allTodolistTasks}
                            />
                        </Paper>
                    </Grid>
                })
            }
        </Grid>
    </>
}