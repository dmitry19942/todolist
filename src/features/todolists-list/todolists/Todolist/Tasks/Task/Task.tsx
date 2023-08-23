import React, {FC, memo} from "react";
import {EditableSpan} from "../../../../../../common/components";
import { Delete } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import { TaskStatuses } from "../../../../../../common/enums";
import {TaskType} from "../../../../tasks/tasks-api";
import s from './styles.module.css'
import {useTask} from "../../../../../../common/hooks";


type PropsType = {
    task: TaskType
    todolistId: string
}

export const Task: FC<PropsType> = memo (({task, todolistId}) => {

    const {changeStatusHandler, changeTitleHandler, removeTaskHandler} = useTask(task, todolistId)

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