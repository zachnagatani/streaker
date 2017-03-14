import React from 'react';
import Calendar from './Calendar';

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
        </div>
    );
};

export default Action;