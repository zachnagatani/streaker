import React from 'react';
import AppBar from 'material-ui/AppBar';
import NavMenu from '../components/NavMenu';
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
                    >
                    <NavMenu />
                    </AppBar>
                    <Quote
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at erat id justo consectetur tempor ut at ex."
                    />
                </header>
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
};

export default App;