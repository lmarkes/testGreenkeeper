import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Error from '../../src/components/Error.jsx';

describe('Error test suite', function() {
    it('h1 present', function() {
        expect(shallow(<Error />).contains(<h1>404</h1>)).to.equal(true);
    });
});