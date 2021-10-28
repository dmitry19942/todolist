import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';

export type FilterValueType = 'all' | 'active' | 'completed'

function App() {
    const [tasks, setTasks] = useState<Array<TaskType>>([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "React", isDone: false }
    ])

    const [filter, setFilter] = useState<FilterValueType>('all')


    const removeTask = (taskID: number) => {
        setTasks(tasks.filter(t => t.id !== taskID))
    }

    const changeFilter = (filter: FilterValueType) => {
        setFilter(filter)
    }

    let tasksForTodolist = tasks
    if(filter === 'active'){
        tasksForTodolist = tasks.filter(t => !t.isDone)
    }
    if(filter === 'completed'){
        tasksForTodolist = tasks.filter(t => t.isDone)
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
