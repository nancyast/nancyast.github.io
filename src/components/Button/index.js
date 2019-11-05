import React from 'react';
import './styles.scss';

const Button = ({
  type = 'primary',
  icon,
  children,
  borderless = false,
  ...props
}) => {
  if (type === 'primary') {
    return (
      <button className={`primary ${borderless && 'borderless'}`} {...props}>
        <span className='icon'>{icon}</span>
        <span>{children}</span>
      </button>
    );
  }
  if (type === 'action') {
    return (
      <button className={`action ${borderless && 'borderless'}`} {...props}>
        <span className='icon'>{icon}</span>
      </button>
    );
  }
};

export default Button;
