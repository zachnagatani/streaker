import React from 'react';
import ActionSheet from './ActionSheet';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <ActionSheet
                    actionTitle="Apply for a Job"
                    currentStreak="5"
                    highestStreak="5" />

                <ActionSheet
                    actionTitle="Apply for a Job"
                    currentStreak="5"
                    highestStreak="5" />
            </div>
        );
    }
};

export default Dashboard;