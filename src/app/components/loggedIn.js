/**
 * Created by debarshi on 21/9/16.
 */
import React from "react";
import UserHeader from "./userHeader";
import TodoList from "./todoList";

export default class LoggedIn extends React.Component {
    render(){
        return <div>
            <UserHeader/>
            <TodoList/>
        </div>
    }
}