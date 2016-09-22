import React from "react";
import {connect} from "react-redux";

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';

class TodoList extends React.Component {
    showTodoList(){
        return this.props.todos.map((todo)=>{
            return <ListItem key={todo.id}
                leftCheckbox={<Checkbox />}
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
        todos: state.todos
    }
}

export default connect(mapStatetoProps)(TodoList);