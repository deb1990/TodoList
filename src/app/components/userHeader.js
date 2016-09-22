import React from "react";
import {connect} from "react-redux";
import AppBar from 'material-ui/AppBar';

class UserHeader extends React.Component {
    showHeader(){
        return <AppBar
            title={this.props.user.name}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
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