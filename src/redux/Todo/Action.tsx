import * as payload from '../../interfaces/Payloads/Todo';
import * as type from './Types'

export const getTodoAction = (payload: payload.GetTodoPayLoad): type.GetTodo => ({
    type: type.GET_TODO_REQUEST,
    payload
});

export const addTodoAction = (payload: payload.AddTodoPayLoad): type.AddTodo => ({
    type: type.ADD_TODO_REQUEST,
    payload
});

export const removeTodoAction = (payload: payload.RemoveTodoPayLoad): type.RemoveTodo => ({
    type: type.REMOVE_TODO_REQUEST,
    payload
});

export const updateTodoAction = (payload: payload.UpdateTodoPayLoad): type.UpdateTodo => ({
    type: type.UPDATE_TODO_REQUEST,
    payload
});
