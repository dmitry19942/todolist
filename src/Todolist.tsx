import React from 'react';
import {FilterValueType} from "./App";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type TodolistPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: number) => void
    changeFilter: (filter: FilterValueType) => void
}

export function Todolist(props: TodolistPropsType) {
    const getTaskJSXElements = (t: TaskType) => {
        const removeTask = () => props.removeTask(t.id)
      return (
          <li key={t.id}>
              <input type="checkbox" checked={t.isDone}/>
              <span>{t.title}</span>
              <button onClick={removeTask}>X</button>
          </li>
      )
    }
    const tasksJSXElements = props.tasks.map(getTaskJSXElements)
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            <li>
                {tasksJSXElements}
            </li>
        </ul>
        <div>
            <button onClick={()=> props.changeFilter('all')}>All</button>
            <button onClick={()=> props.changeFilter('active')}>Active</button>
            <button onClick={()=> props.changeFilter('completed')}>Completed</button>
        </div>
    </div>
}
