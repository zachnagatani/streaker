import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class DeleteActionDialog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        };

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
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Delete Forever"
                onTouchTap={this.handleClose}
            />
        ];

        return (
            <div>
                <div className="row">
                    <div className="col-xs-6 col-xs-offset-6 text-right">
                        <FlatButton label="Delete Action" className="delete-action-button" onTouchTap={this.handleOpen} />
                    </div>
                </div>
                <Dialog
                    title="Delete Action"
                    titleStyle={{color: '#FF5252', textAlign: 'center'}}
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                >
                    You are about to PERMANENTLY delete this action along with its associated streak. This is IRREVERSIBLE.
                </Dialog>
            </div>
        );
    }
};

export default DeleteActionDialog;