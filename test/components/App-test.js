import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

import Auth from '../../src/utils/Auth';
import App from '../../src/components/App.jsx';

describe('App test suite', () => {
    let auth;
    let getTokenStub;
    let getProfileStub;

    afterEach( () => {
        getTokenStub.restore();
        getProfileStub.restore();
    });

    it('MuiThemeProvider not present by default', () => {
        auth = new Auth();
        getTokenStub = sinon.stub(auth, 'getToken',() => {
            return "token";
        });
        getProfileStub = sinon.stub(auth,'getProfile',() => {
            return new Promise( (success,fail) => {
                success({ username: 'khuntley' });
            });
        });

        const app = shallow(<App />);
        const muiThemeProvider = app.find('MuiThemeProvider');
        expect(muiThemeProvider.nodes.length).to.equal(0);
    });

    it('MuiThemeProvider is present if authenticated', (done) => {
        auth = new Auth();
        getTokenStub = sinon.stub(auth, 'getToken',() => {
            return "token";
        });
        getProfileStub = sinon.stub(auth,'getProfile',() => {
            return new Promise( (success,fail) => {
                success({ username: 'khuntley' });
            });
        });

        const app = shallow(<App />);

        setTimeout(() => {
            app.update();

            const muiThemeProvider = app.find('MuiThemeProvider');
            expect(muiThemeProvider.nodes.length).to.equal(1);
            done();
        },0);
    });

    it('MuiThemeProvider is present if not authenticated', (done) => {
        auth = new Auth();
        getTokenStub = sinon.stub(auth, 'getToken',() => {
            return "token";
        });
        getProfileStub = sinon.stub(auth,'getProfile',() => {
            return new Promise( (success,fail) => {
                fail({ error: 'error' });
            });
        });

        const app = shallow(<App />);

        setTimeout(() => {
            // Don't know how to test window location
            done();
        },0);
    });
});