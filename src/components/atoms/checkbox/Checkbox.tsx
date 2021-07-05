import React, { ReactNode }  from 'react';
import './styles.scss';

export type CheckboxProps = {
  children: ReactNode,
  checked?: boolean,
  id: string,
  onChange: (e: any) => void,
};

const Checkbox = (props: CheckboxProps) => {
  const {
    children,
    id = 'accept',
    checked = false,
    onChange,
    ...rest
  } = props;
  return (
    <div className='container-checkbox'>
      <input
        type='checkbox'
        id={id}
        checked={checked}
        name={id}
        onChange={onChange}
        {...rest}
      />
      <label htmlFor={id} className='container-checkbox__label'>
        <span />
        { children }
      </label>
    </div>
  );
};

export default Checkbox;
