/**
 * Created by debarshi on 21/9/16.
 */
import React from "react";
import { hashHistory } from 'react-router';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class login extends React.Component {

    login(){
        hashHistory.push("/todo");
    };

    render(){
        return <div className="loginPage">
            <TextField
                floatingLabelText="Username"
            />
            <br/>
            <TextField
                floatingLabelText="Password"
                type="password"
            />
            <br />

            <RaisedButton label="Login" primary={true} onClick={this.login} />
        </div>
    }
}

export default login;