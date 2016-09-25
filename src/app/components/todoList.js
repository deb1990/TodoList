import React from "react";
import {connect} from "react-redux";

import {updateTodo} from "./../actions/todoActions";

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';

class TodoList extends React.Component {
    changeTodoState(index, event, isInputChecked){
        this.props.dispatch(updateTodo(index, isInputChecked));
    }
    showTodoList(){
        return this.props.todoData.todos.map((todo, index)=>{
            return <ListItem key={todo.id}
                leftCheckbox={<Checkbox checked={todo.done} onCheck={this.changeTodoState.bind(this, index)}/>}
                primaryText={todo.text}
            />;
        });
    }
    render(){
        return <List>
            <Subheader>Todos</Subheader>
            {this.showTodoList()}
        </List>;
    }
}

function mapStatetoProps(state){
    return {
        todoData: state.todoData
    }
}

export default connect(mapStatetoProps)(TodoList);