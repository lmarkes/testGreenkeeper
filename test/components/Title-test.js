import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Title from '../../src/components/Title.jsx';

describe("Title test suite", function() {
    it("img present and correct", function() {
        const logoUrl = "static/images/kuali-logo.png";
        const title = shallow(<Title logoUrl={logoUrl} />);
        const img = title.find('img');
        expect(img.nodes.length).to.equal(1);
        expect(img.nodes[0].props.src).to.equal("static/images/kuali-logo.png");
    });
});
