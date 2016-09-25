import React from "react";

export default class AddTodo extends React.Component {
    render(){
        const actions = [
            <FlatButton
                label="Cancel"
            />,
            <FlatButton
                label="Submit"
            />,
        ];

        return (
            <Dialog
                title="Dialog With Actions"
                modal={true}
                actions={actions}>
            </Dialog>
        );
    }
}