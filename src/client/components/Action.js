import React from 'react';
import Calendar from './Calendar';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

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
                <div className="col-xs-6 col-xs-offset-3">
                    <RaisedButton
                        label="Mark as complete"
                        primary={true}
                        className="complete-button"
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-xs-6 col-xs-offset-6 text-right">
                    <FlatButton label="Delete Action" className="delete-action-button" />
                </div>
            </div>
        </div>
    );
};

export default Action;