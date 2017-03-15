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
                        text="Don't break the streak!"
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