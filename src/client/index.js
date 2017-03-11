import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './containers/App';
import Dashboard from './components/Dashboard';

injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <Route path="dashboard" component={Dashboard} />
            </Route>
        </Router>
    </MuiThemeProvider>,
    document.getElementById('root')
);