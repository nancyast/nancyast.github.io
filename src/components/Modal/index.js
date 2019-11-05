import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import Icon from 'components/Icon';
import Button from 'components/Button';

const ModalWrapper = ({ onClose, children }) => {
  return (
    <div id='modalWrapper'>
      <div className='modalForm'>
        <div className='title'>Edit</div>
        <div className='closeIcon'>
          <Button
            type='action'
            icon={<Icon name='close' />}
            borderless={true}
            onClick={onClose}
          />
        </div>
        <div className='content'>{children}</div>
      </div>
    </div>
  );
};

const Modal = props => {
  if (props.isOpen) {
    return ReactDOM.createPortal(
      <ModalWrapper {...props}>{props.children}</ModalWrapper>,
      document.querySelector('body')
    );
  }

  return null;
};

export default Modal;
