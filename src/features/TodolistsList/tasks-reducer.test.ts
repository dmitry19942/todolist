import {tasksActions, tasksReducer, TasksStateType} from './tasks-reducer';
import {TaskPriorities, TaskStatuses} from "../../api/todolist-api";
import {todolistsActions} from "./todolists-reducer";

let startState: TasksStateType = {}
beforeEach(() => {
    startState = {
        "todolistId1": [
            { id: "1", title: "CSS", status: TaskStatuses.New, todoListId: "todolistId1", entityStatus: 'idle', description: '', startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low },
            { id: "2", title: "JS", status: TaskStatuses.Completed, todoListId: "todolistId1", entityStatus: 'idle', description: '', startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low },
            { id: "3", title: "React", status: TaskStatuses.New, todoListId: "todolistId1", entityStatus: 'idle', description: '', startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low }
        ],
        "todolistId2": [
            { id: "1", title: "bread", status: TaskStatuses.New, todoListId: "todolistId2", entityStatus: 'idle', description: '', startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low },
            { id: "2", title: "milk", status: TaskStatuses.Completed, todoListId: "todolistId2", entityStatus: 'idle', description: '', startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low },
            { id: "3", title: "tea", status: TaskStatuses.New, todoListId: "todolistId2", entityStatus: 'idle', description: '', startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low }
        ]
    }
})

test('correct task should be deleted from correct array', () => {

    const action = tasksActions.removeTaskAC({taskId: "2", todolistId: "todolistId2"});
    const endState = tasksReducer(startState, action)

    expect(endState).toEqual({
        "todolistId1": [
            { id: "1", title: "CSS", status: TaskStatuses.New, todoListId: "todolistId1", entityStatus: 'idle', description: '', startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low },
            { id: "2", title: "JS", status: TaskStatuses.Completed, todoListId: "todolistId1", entityStatus: 'idle', description: '', startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low },
            { id: "3", title: "React", status: TaskStatuses.New, todoListId: "todolistId1", entityStatus: 'idle', description: '', startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low }
        ],
        "todolistId2": [
            { id: "1", title: "bread", status: TaskStatuses.New, todoListId: "todolistId2", entityStatus: 'idle', description: '', startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low },
            { id: "3", title: "tea", status: TaskStatuses.New, todoListId: "todolistId2", entityStatus: 'idle', description: '', startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low }
        ]
    });
});


test('status of specified task should be changed', () => {

    const action = tasksActions.updateTaskAC({taskId: "2", domainModel: {status: TaskStatuses.New}, todolistId: "todolistId2"});
    const endState = tasksReducer(startState, action)

    expect(endState['todolistId1'][1].status).toBe(TaskStatuses.Completed);
    expect(endState['todolistId2'][1].status).toBe(TaskStatuses.New);
});

test('title of specified task should be changed', () => {

    const action = tasksActions.updateTaskAC({taskId: "2", domainModel: {title: 'sugar'}, todolistId: "todolistId2"});
    const endState = tasksReducer(startState, action)

    expect(endState['todolistId1'][1].title).toBe("JS");
    expect(endState['todolistId2'][1].title).toBe("sugar");
});

test('new array should be added when new todolist is added', () => {

    const action = todolistsActions.addTodolistAC({todolist: {id: 'todolistId3', addedDate: '', order: 0, title: ''}});
    const endState = tasksReducer(startState, action)
    const keys = Object.keys(endState);
    const newKey = keys.find(k => k != "todolistId1" && k != "todolistId2");
    if (!newKey) {
        throw Error("new key should be added")
    }

    expect(keys.length).toBe(3);
    expect(endState[newKey]).toEqual([]);
});

test('property with todolistId should be deleted', () => {

    const action = todolistsActions.removeTodolistAC({todolistId: "todolistId2"});
    const endState = tasksReducer(startState, action)
    const keys = Object.keys(endState);

    expect(keys.length).toBe(1);
    expect(endState["todolistId2"]).not.toBeDefined();
});

test('entityStatus of specified task should be changed', () => {

    const action = tasksActions.changeTaskEntityStatusAC({todolistId: "todolistId2", taskId: '2', entityStatus: "loading"});
    const endState = tasksReducer(startState, action)

    expect(endState['todolistId1'][1].entityStatus).toBe("idle");
    expect(endState['todolistId2'][1].entityStatus).toBe("loading");
});