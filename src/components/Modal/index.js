import { Modal as AModal } from 'antd';
import styled from 'styled-components';
import { ReactComponent as CloseIcon } from 'assets/svg/close-circle.svg';

const SModal = styled(AModal)`
  .ant-modal-footer {
    border-top: none;
    padding: 16px 33.5px 24px;
  }

  .ant-modal-close {
    margin: 25px 30px;
    width: 24px;
    height: 24px;

    .ant-modal-close-x {
      width: 24px;
      height: 24px;
      line-height: 24px;
    }
  }

  .ant-modal-body {
    padding-bottom: 0;
  }

  .ant-modal-content {
    h1 {
      text-align: center;
      color: #333;
      font-size: 24px;
      font-family: 'Arial Bold', sans-serif;
      margin-bottom: 16px;
    }

    h3 {
      text-align: center;
      color: #333;
      font-size: 14px;
      margin: 0;
    }
  }
`;

const Modal = (props) => {
  return (
    <SModal closeIcon={<CloseIcon />} centered width={331} {...props}>
      {props.children}
    </SModal>
  );
};

export default Modal;
