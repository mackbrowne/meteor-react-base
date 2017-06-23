/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
import React from 'react';
import { shallow } from 'enzyme';
import { sinon } from 'meteor/practicalmeteor:sinon';
import DueDateSelector from './DueDateSelector.jsx';

if (Meteor.isClient) {
  describe('DueDateSelector', () => {
    describe('renders without crashing', () => {
      it('with no props', () => {
        shallow(<DueDateSelector />);
      });

      it('with props', () => {
        shallow(
          <DueDateSelector
            classNames="testing"
            onClick={sinon.spy()}
            dueDate={new Date()}
          />
        );
      });
    });
  });
}
