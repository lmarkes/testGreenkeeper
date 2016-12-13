import { expect } from 'chai';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import Auth from '../../src/utils/Auth';

describe('Auth test suite', function() {
    it('returns authToken when exists', () => {
        const auth = new Auth();
        document.cookie = 'authToken=blah; ';
        expect(auth.getToken()).to.equal('blah');
    });

    it('returns the core url', () => {
        const auth = new Auth();

        // Don't know of a way to inject one
        expect(auth.getCoreUrl()).to.equal(undefined);
    });

    it('returns the profile promise', () => {
        let mockAdapter = new MockAdapter(axios);
        const user_data = { username: 'khuntley', firstName: 'Keisha', lastName: 'Huntley' };
        mockAdapter.onGet('api/v1/current_user').reply(200,{ data: user_data });

        return new Promise((resolveTest, rejectTest) => {
            const auth = new Auth();

            resolveTest(auth.getProfile());
        })
        .then((result) => {
            expect(result.data.data.username).to.equal('khuntley');
            expect(result.data.data.firstName).to.equal('Keisha');
            expect(result.data.data.lastName).to.equal('Huntley');
        })
        .catch((error) => {
            throw error;
        });
    });
});
