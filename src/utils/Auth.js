import axios from 'axios';

let instance = null;

export default class Auth {
    constructor() {
        // Make this a singleton instance
        if (!instance) {
              instance = this;
        }

        return instance;
    }

    _getCookieValue(name) {
        const value = '; ' + document.cookie;
        const parts = value.split('; ' + name + '=');
        if (parts.length == 2) {
            return parts.pop().split(';').shift();
        }
        return '';
    }

    getCoreUrl() {
        return process.env.CORE_URL;
    }

    getToken() {
        return this._getCookieValue('authToken');
    }

    getProfile(token) {
        const config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        };
        return axios.get('api/v1/current_user', config);
    };
}
