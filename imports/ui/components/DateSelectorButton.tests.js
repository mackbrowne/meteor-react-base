/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
import React from 'react';
import { shallow } from 'enzyme';
import { chai } from 'meteor/practicalmeteor:chai';
import { sinon } from 'meteor/practicalmeteor:sinon';
import DateSelectorButton from './DateSelectorButton.jsx';

if (Meteor.isClient) {
  describe('DateSelectorButton', () => {
    describe('renders properly', () => {
      it('when no date set', () => {
        const wrapper = shallow(<DateSelectorButton classNames="testing" />);
        chai.assert(wrapper.hasClass('testing'));
        chai.assert(wrapper.find('.calender-icon').length);
      });

      it('when date is set', () => {
        const wrapper = shallow(<DateSelectorButton classNames="testing" value="TEST123" />);
        chai.assert(wrapper.hasClass('testing'));
        chai.assert(wrapper.text() === 'TEST123');
        chai.assert(wrapper.find('.calender-icon').length === 0);
      });
    });

    it('should call the `onClick` callback when clicked', () => {
      const onClickSpy = sinon.spy();
      const wrapper = shallow(<DateSelectorButton classNames="testing" onClick={onClickSpy} />);
      wrapper.find('button').simulate('click');
      chai.assert(onClickSpy.calledOnce);
    });
  });
}
