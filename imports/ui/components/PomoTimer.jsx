import React, { Component, PropTypes } from 'react'
import BaseComponent from './BaseComponent.jsx';


// Component
export default class Task extends BaseComponent {

   render() {

      return (
        <div>
          <label>Pomodoro Timer</label>
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
        
      )
   }
}

Task.propTypes = {
}

