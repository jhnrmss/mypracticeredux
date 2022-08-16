import TodoReducer from "./Todo/Reducer";
import { combineReducers } from "redux"


const rootReducer = combineReducers({
    //add reducer here
    TodoReducer
  });

export default rootReducer;