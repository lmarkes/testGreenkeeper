import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import {white, blue600} from 'material-ui/styles/colors';

import WhiteCheckbox from '../../src/components/WhiteCheckbox.jsx';


function setupCheckbox(props) {
    const whiteCheckbox = shallow(<WhiteCheckbox size={props.size} label={props.label} checked={props.checked} />);
    return whiteCheckbox.find('Checkbox');
}

describe("WhiteCheckbox test suite", function() {
    it("checkbox is appropriate size", function() {
        const props = {size: '20px'};
        const checkbox = setupCheckbox(props);
        const checkboxProps = checkbox.props();

        expect(checkbox).to.have.length(1);
        expect(checkboxProps.labelStyle.lineHeight).to.equal(props.size);
        expect(checkboxProps.iconStyle.height).to.equal(props.size);
        expect(checkboxProps.iconStyle.width).to.equal(props.size);
        expect(checkboxProps.style.width).to.equal('inherit');
    });

    it("checkbox is white", function() {
        const checkbox = setupCheckbox({checked: false});
        const checkboxProps = checkbox.props();

        expect(checkboxProps.checked).to.equal(false);

        const uncheckedIconProps = checkboxProps.uncheckedIcon.props;
        expect(uncheckedIconProps.style.color).to.equal(white);
        expect(uncheckedIconProps.style.fill).to.equal(white);


    });

    it("checkbox is blue and checked", function() {
        const checkbox = setupCheckbox({checked: true});
        const checkboxProps = checkbox.props();

        expect(checkboxProps.checked).to.equal(true);

        const checkedIconProps = checkboxProps.checkedIcon.props;
        expect(checkedIconProps.style.color).to.equal(blue600);
        expect(checkedIconProps.style.fill).to.equal(blue600);
    });

    it("checkbox label is correct", function() {
        const props = {label: 'My Special Label'};
        const checkbox = setupCheckbox(props);
        const checkboxProps = checkbox.props();

        expect(checkboxProps.label).to.equal(props.label);
        expect(checkboxProps.labelStyle.color).to.equal(white);
    });
});
