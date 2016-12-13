import { expect } from 'chai';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import Client from '../../src/clients/InstitutionPreferencesClient.js';

describe('InstitutionPreferencesClient test suite', function() {
    it('getInstitutionPrefs does nothing', () => {
        Client.getInstitutionPrefs();
    });

    it('getLogo calls correct method', function() {
        let mockAdapter = new MockAdapter(axios);
        mockAdapter.onGet('api/v1/financials/preferences/logo').reply(200,{ data: { logo: { logoUrl: '/image' } } });

        return new Promise((resolveTest, rejectTest) => {
            Client.getLogo( data => {
                resolveTest();
            },error => {
                rejectTest();
            });
        });
    });

    it('uploadLogo calls correct method', function() {
        let mockAdapter = new MockAdapter(axios);
        mockAdapter.onPost('api/v1/financials/preferences/logo').reply(200,{ });

        return new Promise((resolveTest, rejectTest) => {
            Client.uploadLogo({}, data => {
                resolveTest();
            },error => {
                rejectTest();
            });
        });
    });
});
