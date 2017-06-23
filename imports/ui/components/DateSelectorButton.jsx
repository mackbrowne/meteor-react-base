import React, { PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';
import BaseComponent from './BaseComponent.jsx';

/*
 * Using this inline SVG as a temporary measure. Currently do not have access to
 * your original icon font. That's definitely my preference.
 *
 * This is a Google Material UI Calender-Range icon. Lightly edited.
 */
const calenderIcon = (
  <svg className="calender-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"
    />
  </svg>
);

class DateSelectorButton extends BaseComponent {
  render() {
    const { value, onClick, classNames } = this.props;
    const label = value || calenderIcon;
    const title = i18n.__('components.todoItem.dueDate');

    return (
      <button className={classNames} title={title} onClick={onClick}>
        {label}
      </button>
    );
  }
}

DateSelectorButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  value: PropTypes.string,
};

export default DateSelectorButton;
