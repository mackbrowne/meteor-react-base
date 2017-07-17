import React from 'react';
import BaseComponent from './BaseComponent.jsx';


export default class Task extends BaseComponent {

  render() {
    return (
      <div>
        <h2>Pomodoro Timer</h2>
        <div>
          <h2>HH:MM:SS</h2>
        </div>
        <div>
          <button type="button" className="btn btn-primary btn-md">START/STOP</button>
        </div>
        <div>
          ToDo Item Selected
        </div>
      </div>
    );
  }
}
