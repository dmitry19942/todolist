import React, {ChangeEvent, FC} from "react";
import {EditableSpan} from "../../../../../common/components";
import { Delete } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import { TaskStatuses } from "../../../../../common/enums";
import {TaskType} from "../../../tasks/tasks-api";
import {useActions} from "../../../../../common/hooks";
import {tasksThunks} from "../../../tasks/tasks-reducer";
import s from './styles.module.css'


type PropsType = {
    task: TaskType
    todolistId: string
}

export const Task: FC<PropsType> = React.memo (({task, todolistId}) => {

    const {removeTask, updateTask} = useActions(tasksThunks)

    const removeTaskHandler = () => removeTask({taskId: task.id, todolistId})

    const changeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const status = e.currentTarget.checked ? TaskStatuses.Completed : TaskStatuses.New
        updateTask({todolistId, taskId: task.id, domainModel: {status}}
           );
    }

    const changeTitleHandler = (title: string) => {
        updateTask({todolistId, taskId: task.id, domainModel: {title}});
    }

    return <div key={task.id} className={task.status === TaskStatuses.Completed ? s.isDone : ""}>
        <Checkbox
            checked={task.status === TaskStatuses.Completed}
            color="primary"
            onChange={changeStatusHandler}
            disabled={task.entityStatus === 'loading'}
        />
        <EditableSpan title={task.title} changeTitle={changeTitleHandler} disabled={task.entityStatus === 'loading'} />
        <IconButton onClick={removeTaskHandler} disabled={task.entityStatus === 'loading'} >
            <Delete/>
        </IconButton>
    </div>
})