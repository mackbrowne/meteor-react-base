import React from 'react';
import { _ } from 'meteor/underscore';
import classnames from 'classnames';
import i18n from 'meteor/universe:i18n';
import BaseComponent from './BaseComponent.jsx';
import { displayError } from '../helpers/errors.js';


export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  }

  // set lifecycle
  componentWillMount() {
    this.getTimeUntil(this.props.endTime);
  }

  componentDidMount() {
    setInterval( () => this.getTimeUntil(this.props.endTime), 1000);
  }

  // Setting each interval
  getTimeUntil(endTime) {
    // Variables time intervals
    const time = Date.parse(endTime) - Date.parse(new Date());

    const seconds = Math.floor( (time/1000) % 60 );
    const minutes = Math.floor( (time/1000/60) % 60 );
    const hours = Math.floor( time/(1000*60*60) % 24 );
    const days = Math.floor( time/(1000*60*60*24) );

    this.setState({
      days, hours, minutes, seconds
    });
  }

  render(){
    return (
      <div className="time-clock">
        <div className="time-left__days">
          {this.state.days} Days
        </div>
        <div className="time-left__hours">
          {this.state.hours} Hrs
        </div>
        <div className="time-left__minutes">
          {this.state.minutes} Min
        </div>
        <div className="time-left__seconds">
          {this.state.seconds} Sec
        </div>
      </div>
    )
  }
}
