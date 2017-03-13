import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const AddActionDialog = props => {
    return (
        <Dialog
            className="text-center"
            title="Create Action"
            modal={false}
            open={true}
        >
            <TextField
                hintText="Enter your city"
                floatingLabelText="Search for Venues"
                className="search-bar"
                id="search"
                name="search"
            />
            <RaisedButton label="Create" primary={true} />
        </Dialog>
    );
};

export default AddActionDialog;