import React, { ReactNode }  from 'react';
import cn from 'classnames';
import './styles.scss';

export type ButtonProps = {
  children: ReactNode,
  disabled: boolean,
  onClick: (e: any) => void,
};

const Button = (props: ButtonProps) => {
  const {
    children,
    disabled,
    onClick,
    ...rest
  } = props;
  return (
    <div className='container-button' {...rest}>
      <button className={cn({ active: !disabled })}>
        { children }
      </button>
    </div>
  );
};

export default Button;