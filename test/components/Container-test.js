import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import Container from '../../src/components/Container.jsx';

describe('Container test suite', () => {
    let container;

    it('has default elements', (done) => {
        let mockAdapter = new MockAdapter(axios);
        const instprefs_data = {
            'institutionId' : '1232413535',
            'logoUrl' : 'static/images/kuali-logo.png',
            'menu' : [
                {
                    'label' : 'Feedback',
                    'link' : 'kr/kualiFeedbackReport.do'
                },
                {
                    'label' : 'Help',
                    'link' : 'static/help/default.htm'
                }
            ]
        };
        mockAdapter.onGet('config/api/v1/financials/preferences').reply(200,{ data: instprefs_data });

        container = shallow(<Container />);

        setTimeout(() => {
            expect(container.find('AppBar').nodes.length).to.equal(1);
            done();
        },0);
    });

    it('handles errors', (done) => {
        let mockAdapter = new MockAdapter(axios);

        mockAdapter.onGet('api/v1/financials/preferences').reply(500,{ error: 'error' })

        container = shallow(<Container />);

        setTimeout(() => {
            expect(container.find('AppBar').nodes.length).to.equal(1);
            done();
        },0);
    });

    it('toggles', (done) => {
        let mockAdapter = new MockAdapter(axios);
        const instprefs_data = { };
        mockAdapter.onGet('api/v1/financials/preferences').reply(200,{ data: instprefs_data });

        container = shallow(<Container />);

        setTimeout(() => {
            expect(container.state('navOpen')).to.equal(true);

            let navs = container.find('Navigation').nodes;
            expect(navs.length).to.equal(1);
            let nav = navs[0];

            nav.props.toggleNav();
            expect(container.state('navOpen')).to.equal(false);
            done();
        },0);
    });
});
