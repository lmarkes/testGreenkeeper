import React from 'react';
import { hashHistory } from 'react-router';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Navigation from '../../src/components/Navigation.jsx';

describe('Navigation test suite', function() {
    it('navigation has two drawers', function() {
        const nav = shallow(<Navigation open={false} preferences={{}} toggleNav={undefined} />);
        const drawers = nav.find('Drawer');
        expect(drawers).to.have.length(1);
    });

    it('navigation drawers are closed', function() {
        const nav = shallow(<Navigation open={false} preferences={{}} toggleNav={undefined} />);
        const drawers = nav.find('Drawer');

        expect(drawers.at(0).prop('open')).to.equal(false);
    });

    it('navigation drawers are closed', function() {
        const nav = shallow(<Navigation open={false} preferences={{}} toggleNav={undefined} />);
        const drawers = nav.find('Drawer');

        expect(drawers.at(0).prop('open')).to.equal(false);
    });

    it('navigation drawers are open', function() {
        const nav = shallow(<Navigation open={true} preferences={{}} toggleNav={undefined} />);
        const drawers = nav.find('Drawer');

        expect(drawers.at(0).prop('open')).to.equal(true);
    });

    it('navigation toggle is appropriately placed when closed', function() {
        const nav = shallow(<Navigation open={false} preferences={{}} toggleNav={undefined} />);
        const toggle = nav.find('FlatButton');
        const toggleProps = toggle.at(0).props();

        expect(toggleProps.style.position).to.equal('fixed');
        expect(toggleProps.style.left).to.equal('-6px');
    });

    it('navigation toggle is appropriately placed when open', function() {
        const nav = shallow(<Navigation open={true} preferences={{}} toggleNav={undefined} />);
        const toggle = nav.find('FlatButton');
        const toggleProps = toggle.at(0).props();

        expect(toggleProps.style.position).to.equal('fixed');
        expect(toggleProps.style.left).to.equal('290px');
    });

    it('handles click on Logo', function() {
        let clicked = false;
        let hashHistoryPushStub = sinon.stub(hashHistory, 'push', () => {
            clicked = true;
        });

        const nav = shallow(<Navigation open={true} preferences={{}} toggleNav={undefined} />);

        nav.find('#drawerLogo').simulate('click');

        hashHistoryPushStub.restore();

        expect(clicked).to.be.true;
    });

    it('handles click on Menu', function() {
        let clicked = false;
        let hashHistoryPushStub = sinon.stub(hashHistory, 'push', () => {
            clicked = true;
        });

        const nav = shallow(<Navigation open={true} preferences={{}} toggleNav={undefined} />);

        nav.find('#drawerMenu').simulate('click');

        hashHistoryPushStub.restore();

        expect(clicked).to.be.true;
    });

    it('handles click on Navigation', function() {
        let clicked = false;
        let hashHistoryPushStub = sinon.stub(hashHistory, 'push', () => {
            clicked = true;
        });

        const nav = shallow(<Navigation open={true} preferences={{}} toggleNav={undefined} />);

        nav.find('#drawerNavigation').simulate('click');

        hashHistoryPushStub.restore();

        expect(clicked).to.be.true;
    });
});
