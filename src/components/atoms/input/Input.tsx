import React from 'react';
import cn from 'classnames';
import './styles.scss';

export type InputProps = {
  type?: string,
  placeholder?: string,
  value?: string,
  showError?: boolean,
  messageError?: string,
  maxLength?: number,
  onChange?: (e: any) => void,
};

// const Input = ({
//   type = 'text',
//   placeholder = '',
//   showError,
//   messageError,
//   ...rest
// }) => {
const Input = (props: InputProps) => {
  const {
    type = 'text',
    placeholder = '',
    showError,
    messageError,
    maxLength,
    onChange,
    ...rest
  } = props;

  return (
    <div className={cn('container-input', { error: showError })}>
      <input
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={onChange}
        {...rest}
      />
      <span>
        { messageError }
      </span>
    </div>
  );
};

export default Input;
