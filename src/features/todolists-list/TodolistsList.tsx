import React, {useCallback, useEffect} from "react";
import {useSelector} from "react-redux";
import {
    FilterValuesType,
    todolistsActions, todolistsThunks
} from "./todolists/todolists-reducer";
import {tasksThunks} from "./tasks/tasks-reducer";
import {AddItemForm} from "../../common/components";
import {Todolist} from "./todolists/Todolist/Todolist";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {Navigate} from 'react-router-dom'
import {selectIsLoggedIn} from "../auth/auth-selectors";
import {selectTasks} from "./tasks/tasks-selector";
import {selectTodolists} from "./todolists/todolists-selector";
import {useActions} from "../../common/hooks";

export const TodolistsList: React.FC = () => {

    const todolists = useSelector(selectTodolists)
    const tasks = useSelector(selectTasks)
    const isLoggedIn = useSelector(selectIsLoggedIn)

    const { fetchTodolists,
        removeTodolist: removeTodolistThunk,
        addTodolist: addTodolistThunk,
        changeTodolistTitle: changeTodolistTitleThunk
    } = useActions(todolistsThunks)
    const {addTask: addTaskThunk} = useActions(tasksThunks)
    const {changeTodolistFilter} = useActions(todolistsActions)

    useEffect(() => {
        if (!isLoggedIn) {
            return
        }
        fetchTodolists({})
    }, [])

    const addTask = useCallback((title: string, todolistId: string) => {
        addTaskThunk({todolistId, title});
    }, [])

    const changeFilter = useCallback((todolistId: string, value: FilterValuesType) => {
        changeTodolistFilter({todolistId: todolistId, filter: value});
    }, [])

    const removeTodolist = useCallback((todolistId: string) => {
        removeTodolistThunk(todolistId);
    }, [])

    const changeTodolistTitle = useCallback((todolistId: string, title: string) => {
        changeTodolistTitleThunk({todolistId, title});
    }, [])

    const addTodolist = useCallback((title: string) => {
        addTodolistThunk(title);
    }, [])

    if (!isLoggedIn) {
        return <Navigate to={'/login'}/>
    }
    return <>
        <Grid container style={{padding: "20px"}}>
            <AddItemForm addItem={addTodolist}/>
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
                                changeFilter={changeFilter}
                                addTask={addTask}
                                removeTodolist={removeTodolist}
                                changeTodolistTitle={changeTodolistTitle}
                            />
                        </Paper>
                    </Grid>
                })
            }
        </Grid>
    </>
}