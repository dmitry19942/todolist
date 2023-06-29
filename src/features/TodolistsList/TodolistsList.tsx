import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    FilterValuesType,
    todolistsActions, todolistsThunks, updateTitleTodolistTC
} from "./todolists-reducer";
import {tasksThunks} from "./tasks-reducer";
import {AddItemForm} from "../../components/AddItemForm/AddItemForm";
import {Todolist} from "./Todolist/Todolist";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {TaskStatuses} from "../../api/todolist-api";
import {Navigate} from 'react-router-dom'
import {selectIsLoggedIn} from "../Auth/auth-selectors";
import {selectTasks} from "./tasks-selector";
import {selectTodolists} from "./todolists-selector";

export const TodolistsList: React.FC = () => {

    const todolists = useSelector(selectTodolists)
    const tasks = useSelector(selectTasks)
    const isLoggedIn = useSelector(selectIsLoggedIn)

    const dispatch = useDispatch()

    useEffect(() => {
        if (!isLoggedIn) {
            return
        }
        dispatch(todolistsThunks.fetchTodolists())
    }, [])

    const removeTask = useCallback((taskId: string, todolistId: string) => {
        dispatch(tasksThunks.removeTask({taskId, todolistId}));
    }, [])

    const addTask = useCallback((title: string, todolistId: string) => {
        dispatch(tasksThunks.addTask({todolistId, title}));
    }, [])

    const changeStatus = useCallback((id: string, status: TaskStatuses, todolistId: string) => {
        dispatch(tasksThunks.updateTask({todolistId, taskId: id, domainModel: {status}}));
    }, [])

    const changeTaskTitle = useCallback((id: string, newTitle: string, todolistId: string) => {
        dispatch(tasksThunks.updateTask({todolistId, taskId: id, domainModel: {title: newTitle}}));
    }, [])

    const changeFilter = useCallback((todolistId: string, value: FilterValuesType) => {
        const action = todolistsActions.changeTodolistFilterAC({todolistId: todolistId, filter: value});
        dispatch(action);
    }, [])

    const removeTodolist = useCallback((todolistId: string) => {
        dispatch(todolistsThunks.removeTodolist(todolistId));
    }, [])

    const changeTodolistTitle = useCallback((todolistId: string, title: string) => {
        dispatch(updateTitleTodolistTC(todolistId, title));
    }, [])

    const addTodolist = useCallback((title: string) => {
        dispatch(todolistsThunks.addTodolist(title));
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
                                removeTask={removeTask}
                                changeFilter={changeFilter}
                                addTask={addTask}
                                changeTaskStatus={changeStatus}
                                removeTodolist={removeTodolist}
                                changeTaskTitle={changeTaskTitle}
                                changeTodolistTitle={changeTodolistTitle}
                            />
                        </Paper>
                    </Grid>
                })
            }
        </Grid>
    </>
}