import React from 'react';
import Picker from 'react-datepicker';

import inputCalendarSvg from '../../../assets/input-calendar.svg';

import 'react-datepicker/dist/react-datepicker.css';
import './styles.scss';

export type DatePickerProps = {
  placeholder?: string,
  value?: Date,
  onChange: (e: any) => void,
  maxDate?: Date,
};

// const DatePicker = ({ placeholder, value, onChange, ...rest }) => {
const DatePicker = (props: DatePickerProps) => {
  const { 
    placeholder,
    value,
    onChange,
    maxDate,
    ...rest
  } = props;

  return (
    <div className='container-picker'>
      <Picker
        placeholderText={placeholder}
        selected={value}
        onChange={onChange}
        {...rest}
      />
      <img src={inputCalendarSvg} alt='calendar' />
    </div>
  );
};

export default DatePicker;
