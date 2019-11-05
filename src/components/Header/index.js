import React from 'react';
import './styles.scss';

const Header = props => {
  return (
    <div className='headerContainer'>
      <div className='title'>{props.title}</div>
      <div className='extraComponent'>{props.extra}</div>
    </div>
  );
};

export default Header;
