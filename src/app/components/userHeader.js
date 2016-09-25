import React from "react";
import {connect} from "react-redux";

import AddTodo from "./addTodo";

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Add from 'material-ui/svg-icons/content/add';

class UserHeader extends React.Component {
    showHeader(){
        return <AppBar
            title={this.props.user.name}
            iconElementRight={
                <IconButton>
                    <Add onTouchTap={AddTodo}/>
                </IconButton>
            }
        />;
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