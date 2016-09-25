import {combineReducers} from "redux";
import user from "./userReducer";
import todoData from "./todoReducer";
import { routerReducer } from 'react-router-redux'

const allReducers = combineReducers({
    user,
    todoData,
    routing: routerReducer
});

export default allReducers;