import React, {useCallback, useEffect} from 'react';
import {AddItemForm} from "../../../components/AddItemForm/AddItemForm";
import {EditableSpan} from "../../../components/EditableSpan/EditableSpan";
import {Task} from "./Task/Task";
import {TaskStatuses, TaskType} from "../../../api/task-api";
import {FilterValuesType, TodolistDomainType} from "../todolists-reducer";
import {useDispatch} from "react-redux";
import {fetchTasksTC} from "../tasks-reducer";
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { Delete } from '@mui/icons-material';


type PropsType = {
    todolist: TodolistDomainType
    tasks: Array<TaskType>
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (todolistId: string, value: FilterValuesType) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (taskId: string, status: TaskStatuses, todolistId: string) => void
    removeTodolist: (todolistId: string) => void
    changeTaskTitle: (id: string, title: string, todolistId: string) => void
    changeTodolistTitle: (id: string, title: string) => void
}

export const Todolist = React.memo(function (props: PropsType) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTasksTC(props.todolist.id))
    }, [])

    const addTask = useCallback((title: string) => {
        props.addTask(title, props.todolist.id);
    }, [props.addTask, props.todolist.id])

    const removeTodolist = () => {
        props.removeTodolist(props.todolist.id);
    }
    const changeTodolistTitle = useCallback ((title: string) => {
        props.changeTodolistTitle(props.todolist.id, title)
    }, [props.changeTodolistTitle, props.todolist.id])


    const onAllClickHandler = useCallback (() => props.changeFilter(props.todolist.id, 'all'), [props.todolist.id, props.changeFilter]);
    const onActiveClickHandler = useCallback (() => props.changeFilter(props.todolist.id, 'active'), [props.todolist.id, props.changeFilter]);
    const onCompletedClickHandler = useCallback (() => props.changeFilter(props.todolist.id, "completed"), [props.todolist.id, props.changeFilter]);

    let tasksForTodolist = props.tasks
    if (props.todolist.filter === "active") {
        tasksForTodolist = props.tasks.filter(t => t.status === TaskStatuses.New);
    }
    if (props.todolist.filter === "completed") {
        tasksForTodolist = props.tasks.filter(t => t.status === TaskStatuses.Completed);
    }

    return <div>
        <h3> <EditableSpan title={props.todolist.title} changeTitle={changeTodolistTitle} />
            <IconButton onClick={removeTodolist} disabled={props.todolist.entityStatus === 'loading'}>
                <Delete />
            </IconButton>
        </h3>
        <AddItemForm addItem={addTask} disabled={props.todolist.entityStatus === 'loading'} />
        <div>
            {
                tasksForTodolist.map(t => <Task
                    task={t}
                    changeTaskTitle={props.changeTaskTitle}
                    changeTaskStatus={props.changeTaskStatus}
                    removeTask={props.removeTask}
                    todolistId={props.todolist.id}
                    key={t.id}
                />)
            }
        </div>
        <div style={{ paddingTop: "10px"}}>
            <Button variant={props.todolist.filter === 'all' ? 'outlined' : 'text'}
                    onClick={onAllClickHandler}
                    color={'inherit'}
            >All
            </Button>
            <Button variant={props.todolist.filter === 'active' ? 'outlined' : 'text'}
                    onClick={onActiveClickHandler}
                    color={'primary'}>Active
            </Button>
            <Button variant={props.todolist.filter === 'completed' ? 'outlined' : 'text'}
                    onClick={onCompletedClickHandler}
                    color={'secondary'}>Completed
            </Button>
        </div>
    </div>
})