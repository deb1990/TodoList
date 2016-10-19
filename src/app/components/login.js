/**
 * Created by debarshi on 21/9/16.
 */
import React from "react";
import * as firebase from "firebase";
import { hashHistory } from 'react-router';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import {store} from "./../reducer/index";
import {setAppData} from "./../actions/commonActions";

class login extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    handleUsernameChange(event) {
        this.setState({
            email: event.target.value
        });
    }

    handlePasswordChange(event) {
        this.setState({
            password: event.target.value
        });
    }

    login(){
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(function(user) {
                hashHistory.push("/todo");
                var rootRef = firebase.database().ref("users");

                var userRef = rootRef.child(user.uid);

                // userRef.child("user").set({
                //     name: "Debarshi Bhaumik"
                // });
                // userRef.child("todoData").set([
                //     {
                //         text: "Buy 2 Chicken",
                //         done: false
                //     }
                //     , {
                //         text: "Learn 3 React",
                //         done: false
                //     }
                // ]);

                userRef.on("value", function(val) {
                    store.dispatch(setAppData(val.val()));
                });
            })
            .catch(function(error) {
                console.log(error);
            });

    };

    render(){
        return <div className="loginPage">
            <TextField
                floatingLabelText="Username"
                value={this.state.email}
                onChange={this.handleUsernameChange.bind(this)}
            />
            <br/>
            <TextField
                floatingLabelText="Password"
                type="password"
                value={this.state.password}
                onChange={this.handlePasswordChange.bind(this)}
            />
            <br />

            <RaisedButton label="Login" primary={true} onClick={this.login.bind(this)} />
        </div>
    }
}

export default login;