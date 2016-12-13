import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Logo from '../../src/components/Logo.jsx';

describe('Logo test suite', function() {
    let logo;

    it('has an h1', function() {
        expect(shallow(<Logo />).contains(<h1>Logo Upload</h1>)).to.equal(true);
    });

    it('loads the logo', function() {
        let mockAdapter = new MockAdapter(axios);
        mockAdapter.onGet('api/v1/financials/institution_preferences/logo').reply(200,{ data: { logo: { logoUrl: '/image' } } });

        logo = shallow(<Logo />);

        setTimeout(() => {
            expect(logo.state('logo')).to.equal('/image');
        },0);
    });

    it('handles logo failure', function() {
        let mockAdapter = new MockAdapter(axios);
        mockAdapter.onGet('api/v1/financials/institution_preferences/logo').reply(404,{ });

        logo = shallow(<Logo />);

        setTimeout(() => {
            expect(logo.state('logo')).to.equal('');
            expect(logo.state('error').to.equal('Error loading logo'));
        },0);
    });

    // it('successfully saves', function() {
    //     let mockAdapter = new MockAdapter(axios);
    //     mockAdapter.onGet('config/api/v1/financials/institution_preferences/logo').reply(200,{ data: { logo: { logoUrl: '/image' } } });
    //     mockAdapter.onPut('config/api/v1/financials/institution_preferences/logo').reply(200,{});

    //     logo = shallow(<Logo />);

    //     setTimeout(() => {
    //         let buttons = logo.find('buttons');
    //         expect(buttons.nodes.length).to.equal(1);

    //         buttons.nodes[0].simulate('click');

    //         setTimeout(() => {

    //         },0);
    //     },0);

    // });
    // it('handles onDrop failure', function() {
    //     let mockAdapter = new MockAdapter(axios);
    //     const instprefs_data = { };
    //     mockAdapter.onGet('config/api/v1/financials/institution_preferences/logo').reply(200,{ data: { logo: { logoUrl: '/image' } } });
    //     mockAdapter.onPost('config/api/v1/financials/institution_preferences/logo').reply(404,{ });

    //     return new Promise((resolveTest, rejectTest) => {
    //         logo = shallow(<Logo />);
    //     })
    //     .then( result => {
    //         console.log('wtf1?');
    //         setTimeout(() => {
    //             let dropzones = logo.find('Dropzone').nodes;
    //             expect(dropzones.length).to.equal(1);
    //             let dropzone = dropzones[0];

    //             dropzone.onDrop([ 'file' ]);
    //             console.log('wtf');
    //             resolveTest();
    //         },0);
    //     })
    //     .catch((error) => {
    //         rejectTest();
    //         throw error;
    //     });
    // });
});