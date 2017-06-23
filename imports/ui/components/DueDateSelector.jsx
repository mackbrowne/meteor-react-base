import React, { PropTypes } from 'react';
import classnames from 'classnames';
import i18n from 'meteor/universe:i18n';
import DatePicker from 'react-datepicker';
import moment from 'moment';


// Components
import DateSelectorButton from './DateSelectorButton.jsx';
import BaseComponent from './BaseComponent.jsx';

class DueDateSelector extends BaseComponent {
  render() {
    const { dueDate, onChange, className } = this.props;

    const today = new Date().setHours(0, 0, 0, 0).valueOf();

    const isDateSet = dueDate !== undefined;
    const dueDateMoment = isDateSet ? moment(dueDate) : undefined;
    const dueDateValue = dueDateMoment ? dueDateMoment.toDate().valueOf() : -Infinity;

    const dateSelectorClass = classnames({
      [className]: true,
      'due-date-selector': true,
      'date-set': isDateSet,
      overdue: dueDateValue < today,
      today: dueDateValue === today,
    });

    return (
      <DatePicker
        customInput={<DateSelectorButton classNames={dateSelectorClass} />}
        selected={dueDateMoment}
        dateFormat={i18n.__('components.todoItem.dateFormat')}
        onChange={onChange}
        locale={i18n.locale}
        popoverAttachment="bottom right"
        popoverTargetAttachment="top right"
        popoverTargetOffset="0px -16px"
      />
    );
  }
}

DueDateSelector.propTypes = {
  className: PropTypes.string,
  dueDate: PropTypes.object,
  onChange: PropTypes.func,
};

export default DueDateSelector;
