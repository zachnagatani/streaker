import React from 'react';
import AppBar from 'material-ui/AppBar';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppBar
                title="Streaker"
            />
        );
    }
};

export default App;