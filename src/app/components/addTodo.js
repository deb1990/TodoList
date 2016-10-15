import React from "react";
import {connect} from "react-redux";
import {addTodo} from "./../actions/todoActions";


import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

class AddTodo extends React.Component {

    constructor() {
        super();
        this.state = {
            addTodoDialog: false
        };
    }

    closeTodoDialog(){
        // this.props.dispatch(showAddTodo(false));
    }

    addTodo(){
        this.props.dispatch(addTodo(false));
    }

    render(){
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
        return (
            <Dialog
                title="Add New Todo"
                open={this.state.addTodoDialog}
                actions={actions}>
                <TextField
                    hintText="Enter something"
                />
            </Dialog>
        );
    }
}


function mapStatetoProps(state){
    return {
        todoData: state.todoData
    }
}

export default connect(mapStatetoProps)(AddTodo);