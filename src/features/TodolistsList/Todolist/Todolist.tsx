import React, {useCallback, useEffect} from 'react';
import {AddItemForm} from "../../../components/AddItemForm/AddItemForm";
import {EditableSpan} from "../../../components/EditableSpan/EditableSpan";
import {Task} from "./Task/Task";
import {TaskStatuses, TaskType} from "../../../api/task-api";
import {FilterValuesType} from "../todolists-reducer";
import {useDispatch} from "react-redux";
import {fetchTasksTC} from "../tasks-reducer";
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { Delete } from '@mui/icons-material';

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (todolistId: string, value: FilterValuesType) => void
    addTask: (title: string, todolistId: string) => void
    filter: FilterValuesType
    changeTaskStatus: (taskId: string, status: TaskStatuses, todolistId: string) => void
    removeTodolist: (todolistId: string) => void
    changeTaskTitle: (id: string, title: string, todolistId: string) => void
    changeTodolistTitle: (id: string, title: string) => void
}

export const Todolist = React.memo((props: PropsType) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTasksTC(props.id))
    }, [])

    const addTask = useCallback((title: string) => {
        props.addTask(title, props.id);
    }, [props.addTask, props.id])

    const removeTodolist = () => {
        props.removeTodolist(props.id);
    }
    const changeTodolistTitle = useCallback ((title: string) => {
        props.changeTodolistTitle(props.id, title)
    }, [props.changeTodolistTitle, props.id])


    const onAllClickHandler = useCallback (() => props.changeFilter(props.id, 'all'), [props.id, props.changeFilter]);
    const onActiveClickHandler = useCallback (() => props.changeFilter(props.id, 'active'), [props.id, props.changeFilter]);
    const onCompletedClickHandler = useCallback (() => props.changeFilter(props.id, "completed"), [props.id, props.changeFilter]);

    let tasksForTodolist = props.tasks
    if (props.filter === "active") {
        tasksForTodolist = props.tasks.filter(t => t.status === TaskStatuses.New);
    }
    if (props.filter === "completed") {
        tasksForTodolist = props.tasks.filter(t => t.status === TaskStatuses.Completed);
    }

    return <div>
        <h3> <EditableSpan title={props.title} changeTitle={changeTodolistTitle} />
            <IconButton onClick={removeTodolist}>
                <Delete />
            </IconButton>
        </h3>
        <AddItemForm addItem={addTask}/>
        <div>
            {
                tasksForTodolist.map(t => <Task
                    task={t}
                    changeTaskTitle={props.changeTaskTitle}
                    changeTaskStatus={props.changeTaskStatus}
                    removeTask={props.removeTask}
                    todolistId={props.id}
                    key={t.id}
                />)
            }
        </div>
        <div style={{ paddingTop: "10px"}}>
            <Button variant={props.filter === 'all' ? 'outlined' : 'text'}
                    onClick={onAllClickHandler}
                    color={'inherit'}
            >All
            </Button>
            <Button variant={props.filter === 'active' ? 'outlined' : 'text'}
                    onClick={onActiveClickHandler}
                    color={'primary'}>Active
            </Button>
            <Button variant={props.filter === 'completed' ? 'outlined' : 'text'}
                    onClick={onCompletedClickHandler}
                    color={'secondary'}>Completed
            </Button>
        </div>
    </div>
})