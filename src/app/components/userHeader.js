import React from "react";
import {connect} from "react-redux";

import {addTodo} from "./../actions/todoActions";


import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Add from 'material-ui/svg-icons/content/add';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

class UserHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            addTodoDialog: false,
            newTodo: ""
        };
    }

    showAddTodoModal(){
        this.setState({
            addTodoDialog: true,
            newTodo: ""
        });
    }

    closeTodoDialog(){
        this.setState({
            addTodoDialog: false
        });
    }

    addTodo(){
        this.props.dispatch(addTodo(this.state.newTodo));
        this.state = {
            addTodoDialog: false,
            newTodo: ""
        };
    }

    handleTextChange(event) {
        this.setState({
            newTodo: event.target.value
        });
    }

    showHeader(){
        const actions = [
            <FlatButton
                label="Cancel"
                onTouchTap={this.closeTodoDialog.bind(this)}
            />,
            <FlatButton
                label="Submit"
                onTouchTap={this.addTodo.bind(this)}
            />,
        ];

        return <div>
            <AppBar
                title={this.props.user.name}
                iconElementRight={
                <IconButton onTouchTap = {this.showAddTodoModal.bind(this)}>
                    <Add/>
                </IconButton>
            }
            />
            <Dialog
                title="Add New Todo"
                open={this.state.addTodoDialog}
                actions={actions}>
                <TextField
                    hintText="Enter something"
                    value={this.state.newTodo}
                    onChange={this.handleTextChange.bind(this)}
                />
            </Dialog>
        </div>;
    }

    render(){
        return <div>{this.showHeader()}</div>
    }
}

function mapStatetoProps(state){
    return {
        user: state.user
    }
}

export default connect(mapStatetoProps)(UserHeader);