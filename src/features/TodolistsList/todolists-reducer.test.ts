import {
    FilterValuesType,
    TodolistDomainType, todolistsActions,
    todolistsReducer, todolistsThunks
} from './todolists-reducer';
import {v1} from 'uuid';
import {RequestStatusType} from "../../app/app-reducer";

let todolistId1: string;
let todolistId2: string;
let startState: Array<TodolistDomainType> = []

beforeEach(() => {
    todolistId1 = v1();
    todolistId2 = v1();
    startState = [
        {id: todolistId1, title: "What to learn", filter: "all", entityStatus: 'idle', addedDate: '', order: 0},
        {id: todolistId2, title: "What to buy", filter: "all", entityStatus: 'idle', addedDate: '', order: 0}
    ]
})

test('correct todolist should be removed', () => {

    const endState = todolistsReducer(startState, todolistsThunks.removeTodolist.fulfilled({todolistId: todolistId1}, 'requestId', todolistId1))

    expect(endState.length).toBe(1);
    expect(endState[0].id).toBe(todolistId2);
});

test('correct todolist should be added', () => {

    let newTodolistTitle = "New Todolist";
    const endState = todolistsReducer(startState, todolistsThunks.addTodolist.fulfilled({todolist: {id: 'todolistId', addedDate: '', order: 0, title: newTodolistTitle}}, 'requestId', 'New Todolist'))

    expect(endState.length).toBe(3);
    expect(endState[0].title).toBe('New Todolist');
    expect(endState[0].filter).toBe("all");
    expect(endState[0].id).toBeDefined();
});

test('correct todolist should change its name', () => {

    let newTodolistTitle = "New Todolist";
    const args = {todolistId: todolistId2, title: newTodolistTitle}
    const action = todolistsThunks.changeTodolistTitle.fulfilled(args, 'requestId', args);
    const endState = todolistsReducer(startState, action);

    expect(endState[0].title).toBe("What to learn");
    expect(endState[1].title).toBe(newTodolistTitle);
});

test('correct filter of todolist should be changed', () => {

    let newFilter: FilterValuesType = "completed";
    const action = todolistsActions.changeTodolistFilter({todolistId: todolistId2, filter: newFilter});
    const endState = todolistsReducer(startState, action);

    expect(endState[0].filter).toBe("all");
    expect(endState[1].filter).toBe(newFilter);
});

test('todolists should be added', () => {
    const action = todolistsThunks.fetchTodolists.fulfilled({todolists: startState}, 'requestId')
    const endState = todolistsReducer([], action)
    expect(endState.length).toBe(2)
})

test('correct entity status of todolist should be changed', () => {

    let newEntityStatus: RequestStatusType = "loading";
    const action = todolistsActions.changeTodolistEntityStatusAC({todolistId: todolistId2, entityStatus: newEntityStatus});
    const endState = todolistsReducer(startState, action);

    expect(endState[0].entityStatus).toBe("idle");
    expect(endState[1].entityStatus).toBe(newEntityStatus);
});