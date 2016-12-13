import React from 'react';
import axios from 'axios';
import AppBar from 'material-ui/AppBar';
import {grey100, grey300, grey600} from 'material-ui/styles/colors';

import Title from './Title.jsx';
import Navigation from './Navigation.jsx';

import Auth from '../utils/Auth';

export default class Container extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            preferences: {logoUrl: ''},
            navOpen: true
        }
    }

    componentWillMount() {
        const auth = new Auth();

        const config = {
            headers: {
                'Authorization': 'Bearer ' + auth.getToken()
            }
        };

        axios.get('api/v1/financials/preferences', config)
        .then( prefsResponse => {
            this.setState({ 
                preferences: prefsResponse.data,
                navOpen: true
            });

        })
        .catch( error => {
            this.setState({ navOpen: true });
        });
    }

    toggleNav = () => {
        this.setState({navOpen: !this.state.navOpen});
    }

    render() {
        const styles = {
            title: {
                height: '60px',
                lineHeight: '60px',
                fontSize: '26px',
                paddingLeft: '70px ',
                color: grey600
            },
            content: {
                padding: '20px 30px',
                backgroundColor: grey300,
                position: 'absolute',
                top: '0',
                bottom: '0',
                right: '0',
                left: '0',
                marginTop: '60px',
                marginLeft: '320px',
                transition: '200ms all'
            }
        };

        if (!this.state.navOpen) {
            styles.content.marginLeft = '0';
        }

        return (
            <div>
                <AppBar
                    title={<Title logoUrl={this.state.preferences.logoUrl}/>}
                    titleStyle={styles.title}
                    showMenuIconButton={false}
                    style={{backgroundColor: grey100}}
                />

                <Navigation
                    open={this.state.navOpen}
                    preferences={this.state.preferences}
                    toggleNav={this.toggleNav}
                />

                <div style={styles.content}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
