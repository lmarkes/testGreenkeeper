import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Menu from '../../src/components/Menu.jsx';

describe('Menu test suite', function() {
    it('div present', function() {
        expect(shallow(<Menu />).contains(<div>Menu</div>)).to.equal(true);
    });
});
