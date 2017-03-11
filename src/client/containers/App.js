import React from 'react';
import AppBar from 'material-ui/AppBar';
import Quote from '../components/Quote';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <header>
                    <AppBar
                        showMenuIconButton={false}
                        title="Streaker"
                    />
                    <Quote
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at erat id justo consectetur tempor ut at ex."
                    />
                </header>
                {this.props.children}
            </div>
        );
    }
};

export default App;