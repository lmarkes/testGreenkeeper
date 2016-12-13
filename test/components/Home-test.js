import React from 'react';
import { expect } from 'chai';
import assert from 'assert';
import { shallow, mount, render } from 'enzyme';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import Home from '../../src/components/Home.jsx';

describe('Home test suite', function() {
    it('should fetch current user', (done) => {
        let mockAdapter = new MockAdapter(axios);
        const user_data = { username: 'khuntley', firstName: 'Keisha', lastName: 'Huntley' };
        mockAdapter.onGet('api/v1/current_user').reply(200,user_data);

        let wrapper = shallow(<Home />);

        setTimeout( () => {
            wrapper.update();

            let p1 = wrapper.find('p').nodes[0].props.children;
            expect(p1[0]).to.equal('Username: ');
            expect(p1[1]).to.equal(user_data.username);
            let p2 = wrapper.find('p').nodes[1].props.children;
            expect(p2[0]).to.equal('First Name: ');
            expect(p2[1]).to.equal(user_data.firstName);
            let p3 = wrapper.find('p').nodes[2].props.children;
            expect(p3[0]).to.equal('Last Name: ');
            expect(p3[1]).to.equal(user_data.lastName);
            done();
        },0);
    });

    it('should handle the error', (done) => {
        let mockAdapter = new MockAdapter(axios);
        const error = {  };
        mockAdapter.onGet('api/v1/current_user').reply(400,error);

        let wrapper = shallow(<Home />);

        setTimeout( () => {
            wrapper.update();

            let p1 = wrapper.find('p').nodes[0].props.children;
            expect(p1[0]).to.equal('Username: ');
            expect(p1[1]).to.equal('error');
            done();
        },0);
    });
});

