import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState<string>('');

    const addTask = () => {
        props.addTask(title)
        setTitle('')
    }

    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
    const onKeyPressAddTask = (e: KeyboardEvent<HTMLInputElement>) => {if (e.key === "Enter") {addTask() } }
    const onAllHandler =  () => { props.changeFilter("all") }
    const onActiveHandler = () => { props.changeFilter("active") }
    const onCompletedHandler = () => { props.changeFilter("completed") }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title}
                   onChange={changeTitle}
                   onKeyPress={onKeyPressAddTask}
            />
            <button onClick={addTask}>+</button>
        </div>
        <ul>
            {
                props.tasks.map(t => {
                    const onClickHandler = () => {props.removeTask(t.id)}
                    return <li key={t.id}>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={onClickHandler}>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button onClick={onAllHandler}>
                All
            </button>
            <button onClick={onActiveHandler}>
                Active
            </button>
            <button onClick={onCompletedHandler}>
                Completed
            </button>
        </div>
    </div>
}