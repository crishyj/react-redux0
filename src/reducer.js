import { combineReducers } from "redux";
import todoReducer from './features/todos/todoSlice';
import filterReducer from "./features/filters/filtersSlice";

const rootReducer = combineReducers({
    todos: todoReducer,
    filters: filterReducer
})

export default rootReducer


