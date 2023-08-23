import {useActions} from "./useActions";
import {tasksThunks} from "../../features/todolists-list/tasks/tasks-reducer";
import {ChangeEvent} from "react";
import {TaskStatuses} from "../enums";
import {TaskType} from "../../features/todolists-list/tasks/tasks-api";

export const useTask = (task: TaskType, todolistId: string) => {

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

    return (
        {
            removeTaskHandler,
            changeStatusHandler,
            changeTitleHandler
        }
    )
}