import React from 'react';

import { hashHistory, Router, Route, IndexRedirect } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Auth from '../utils/Auth';
import customBaseTheme from '../utils/customBaseTheme';
import Container from './Container.jsx';
import Home from './Home.jsx';
import Logo from './Logo.jsx';
import Menu from './Menu.jsx';
import Navigation from './NavigationConfiguration.jsx';
import Error from './Error.jsx';

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            auth: false
        };
    }

    componentWillMount() {
        const auth = new Auth();

        auth.getProfile(auth.getToken())
            .then( (response) => {
                this.setState({ auth: true });
            })
            .catch( (error) => {
                window.location = auth.getCoreUrl() + '/auth/';
            })
    }

    render() {
        if ( this.state.auth ) {
            return (
                <MuiThemeProvider muiTheme={getMuiTheme(customBaseTheme)}>
                    <Router history={hashHistory}>
                        <Route path="/" component={Container}>
                            <IndexRedirect to="/home"/>
                            <Route path="home" component={Home}/>
                            <Route path="logo" component={Logo}/>
                            <Route path="menu" component={Menu}/>
                            <Route path="navigation" component={Navigation}/>
                            <Route path='*' component={Error}/>
                        </Route>
                    </Router>
                </MuiThemeProvider>
            );
        } else {
            return <div/>;
        }
    }
}
