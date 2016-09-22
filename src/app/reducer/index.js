import {combineReducers} from "redux";
import user from "./userReducer";
import todos from "./todoReducer";
import { routerReducer } from 'react-router-redux'

const allReducers = combineReducers({
    user,
    todos,
    routing: routerReducer
});

export default allReducers;