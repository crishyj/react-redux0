import { combineReducers } from "redux";
import todoReducer from './features/todos/todoSlice';
import filterReducer from "./features/filters/filtersSlice";

// export default function rootReducer(state = {}, action){
//    return {
//        todos: todoReducer(state.todos, action),
//        filters: filterReducer(state.filters, action)
//    }
// };

const rootReducer = combineReducers({
    todos: todoReducer,
    filters: filterReducer
})

export default rootReducer


