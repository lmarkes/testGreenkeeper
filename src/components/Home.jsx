import React from 'react';
import axios from 'axios';

import Auth from '../utils/Auth';

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = { username: '', firstName: '', lastName: '' };
    }

    componentWillMount() {
        const auth = new Auth();

        const config = {
            headers: {
                'Authorization': 'Bearer ' + auth.getToken()
            }
        };

        axios.get('api/v1/current_user', config)
             .then(userResponse => {
                 const profile = userResponse.data;
                 this.setState({ username: profile.username, firstName: profile.firstName, lastName: profile.lastName });
            })
            .catch(error => {
                this.setState({ username: 'error' });
            });
    }

    render() {
        return (
            <div>
                <h1>Financials</h1>
                <p>Username: {this.state.username}</p>
                <p>First Name: {this.state.firstName}</p>
                <p>Last Name: {this.state.lastName}</p>
            </div>
        );
    }
}
