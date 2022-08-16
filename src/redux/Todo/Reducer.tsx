import { AnyAction } from 'redux'
import * as types from './Types'

const TodoReducer = (state: 
    types.TodoState = types.InitialState, 
    action: AnyAction) => {
        switch(action.type){
            case types.GET_TODO_SUCCESS:
                return{
                    ...state,
                    Todo: action.payload
                }
            default:
                return state
        }
}
export default TodoReducer;