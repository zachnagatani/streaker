import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import AddActionButton from './AddActionButton';
import { hashHistory } from 'react-router';

class AddActionDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleOpen() {
        this.setState({ open: true });
    }

    handleClose() {
        this.setState({ open: false });
        hashHistory.push('/action');
    }

    render() {
        const actions = [
            <FlatButton
                label="Create Action"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Cancel"
                onTouchTap={this.handleClose}
            />
        ];

        return (
            <div>
                <AddActionButton handleOpen={this.handleOpen} />
                <Dialog
                    className="text-center"
                    title="Create Action"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                >
                    <TextField
                        hintText="'Go Running'"
                        floatingLabelText="Add An Action"
                        id="add-action"
                        name="add-action"
                    />
                </Dialog>
            </div>
        );
    }
};

export default AddActionDialog;