import React from 'react';
import { map } from 'lodash';
import './styles.scss';

export type DropDownProps = {
  data: any
  value: any,
  onChange?: (e: any) => void,
};

// const Select = ({ data, value, ...rest }) => {
const Dropdown = (props: DropDownProps) => {
  const { data, value, ...rest } = props;

  return (
    <div className='container-select'>
      <select value={value} {...rest}>
        { map(data, ({ name, id }) => {
          return (
            <option key={id} value={id}>
              { name }
            </option>
          )
        }) }
      </select>
    </div>
  );
};

export default Dropdown;
