import React from 'react';
import { _ } from 'meteor/underscore';
import classnames from 'classnames';
import i18n from 'meteor/universe:i18n';
import BaseComponent from './BaseComponent.jsx';
import Clock from '../components/Clock.jsx';
import { displayError } from '../helpers/errors.js';


export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      endTime: 'June 30, 2017',
      newEndTime: ''
    }
  }
  // Change deadline to new set input
  changeEndTime() {
    this.setState({
      endTime: this.state.newEndTime
    });
  }

  render(){
    return (
      <div className="counter-item">
        <Clock 
          endTime={ this.state.endTime }
        />
        <div className="time-input">
          <input 
            type="date"
            className="time-left__newTime"
            placeholder='New Deadline'
            value="2017-12-25"
            onChange={ event => this.setState({newEndTime: event.target.value}) }
          />
          <span className="icon-add timer-icon" onClick={ () => this.changeEndTime() } />
        </div>
      </div>
    )
  }
}
