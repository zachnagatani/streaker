import React from 'react';
import Paper from 'material-ui/Paper';

const ActionSheet = props => {
    return (
        <div className="row">
            <Paper className="col-xs-10 col-xs-offset-1 action-sheet text-center">
                <h2 className="action-sheet__title">{props.actionTitle}</h2>
                <p className="lead">At a Glance:</p>
                <p>Current Streak: {props.currentStreak}</p>
                <p>Highest Streak: {props.highestStreak}</p>
            </Paper>
        </div>
    );
};

export default ActionSheet;