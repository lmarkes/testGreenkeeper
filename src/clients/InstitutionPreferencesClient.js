import axios from 'axios';
import Auth from '../utils/Auth';

const urlPrefix = 'api/v1/financials/preferences';

const auth = new Auth();

const config = {
    headers: {
        'Authorization': 'Bearer ' + auth.getToken()
    }
};

function getInstitutionPrefs() {

}

function getLogo(success, fail) {
    axios.get(urlPrefix + '/logo', config).then(success).catch(fail);
}

function uploadLogo(data, success, fail) {
    axios.post(urlPrefix + '/logo', data, config).then(success).catch(fail);
}

var api = {
    getInstitutionPrefs,
    getLogo,
    uploadLogo

};

export default api;