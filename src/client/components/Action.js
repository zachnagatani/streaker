import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Calendar from './Calendar';
import DeleteActionDialog from './DeleteActionDialog';

const Action = props => {
    return (
        <div className="container">
            <h1 className="text-center">Apply for a Job</h1>

            <div className="row">
                <div className="col-xs-12">
                    <p className="text-center lead">Current Streak: 8 | Highest Streak: 8</p>
                </div>
            </div>

            <Calendar />

            <div className="row">
                <div className="col-xs-6 col-xs-offset-3 text-center">
                    <RaisedButton
                        label="'X' It!"
                        secondary={true}
                        className="complete-button"
                    />
                </div>
            </div>

            <DeleteActionDialog />
        </div>
    );
};

export default Action;