import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import NavigationConfiguration from '../../src/components/NavigationConfiguration.jsx';

describe('NavigationConfiguration test suite', function() {
    it('div present', function() {
        expect(shallow(<NavigationConfiguration />).contains(<div>Navigation Configuration</div>)).to.equal(true);
    });
});
