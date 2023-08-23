import {useActions} from "./useActions";
import {todolistsThunks} from "../../features/todolists-list/todolists/todolists-reducer";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {selectIsLoggedIn} from "../../features/auth/auth-selectors";

export const useTodolistsList = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn)

    const {fetchTodolists, addTodolist} = useActions(todolistsThunks)

    useEffect(() => {
        if (!isLoggedIn) {
            return
        }
        fetchTodolists({})
    }, [])

    const addTodolistCallback = (title: string) => {
        return addTodolist(title).unwrap()
    }

    return (
        {
            isLoggedIn,
            addTodolistCallback
        }
    )
}