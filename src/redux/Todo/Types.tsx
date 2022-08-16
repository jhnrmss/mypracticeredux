import * as payload from '../../interfaces/Payloads/Todo';
import { ITodo } from '../../interfaces/Payloads/Todo';

export interface TodoState {
    Todo:{
        data: ITodo[];
    }
};

export const InitialState: TodoState = {
    Todo:{
        data:[],
    },
}

export type GetTodo = {
    type: typeof GET_TODO_REQUEST,
    payload: payload.GetTodoPayLoad
}

export type AddTodo =  {
    type: typeof ADD_TODO_REQUEST,
    payload: payload.AddTodoPayLoad
};
export type RemoveTodo =  {
    type: typeof REMOVE_TODO_REQUEST,
    payload: payload.RemoveTodoPayLoad
};
export type UpdateTodo =  {
    type: typeof UPDATE_TODO_REQUEST,
    payload: payload.UpdateTodoPayLoad
};

export const GET_TODO_ACTION = 'GET_TODO_ACTION';
export const GET_TODO_REQUEST = 'GET_TODO_REQUEST';
export const GET_TODO_SUCCESS = 'GET_TODO_SUCCESS';
export const GET_TODO_FAIL ='GET_TODO_FAIL'; 

export const ADD_TODO_ACTION = 'ADD_TODO_ACTION';
export const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAIL ='ADD_TODO_FAIL'; 

export const REMOVE_TODO_ACTION = 'REMOVE_TODO_ACTION'
export const REMOVE_TODO_REQUEST = 'REMOVE_TODO_REQUEST'
export const REMOVE_TODO_SUCCESS = 'REMOVE_TODO_SUCCESS'
export const REMOVE_TODO_FAIL = 'REMOVE_TODO_FAIL'

export const UPDATE_TODO_ACTION = 'UPDATE_TODO_ACTION'
export const UPDATE_TODO_REQUEST = 'UPDATE_TODO_REQUEST'
export const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS'
export const UPDATE_TODO_FAIL = 'UPDATE_TODO_FAIL'


export type TodoTypes = GetTodo | AddTodo | RemoveTodo | UpdateTodo;