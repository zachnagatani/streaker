import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AddActionButton from './AddActionButton';

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
    }

    render() {
        return (
            <div>
                <AddActionButton handleOpen={this.handleOpen} />
                <Dialog
                    className="text-center"
                    title="Create Action"
                    modal={false}
                    open={this.state.open}
                >
                    <TextField
                        hintText="Enter your city"
                        floatingLabelText="Search for Venues"
                        className="search-bar"
                        id="search"
                        name="search"
                    />
                    <RaisedButton label="Create" primary={true} onTouchTap={this.handleClose} />
                </Dialog>
            </div>
        );
    }
};

export default AddActionDialog;