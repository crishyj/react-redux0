import { createStore } from "redux";
import rootReducer from "./reducer";

let preloadedstate
const persistedTodoString = localStorage.getItem('todos')

if(persistedTodoString){
    preloadedstate = {
        todos: JSON.parse(persistedTodoString)
    }
}

const store = createStore(rootReducer, preloadedstate)