/**
 * Created by debarshi on 21/9/16.
 */
import React from "react";
import { hashHistory } from 'react-router';

class login extends React.Component {

    login(){
        hashHistory.push("/todo");
    };

    render(){
        return <div>
            Username<input type="text"/>
            Password<input type="password"/>
            <button onClick={this.login}>Login</button>
        </div>
    }
}

export default login;