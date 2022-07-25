import { Button as AButton } from 'antd';
import styled from 'styled-components';

const Button = styled(AButton)`
  font-family: 'Arial Bold', sans-serif;
  font-size: 16px;
  line-height: 24px;
  width: ${(props) => (props.fitContent ? 'fit-content' : '100%')};
  height: ${(props) => (props.small ? '32px' : '50px')};
  border-radius: 4px;
  padding: 4px 15px;

  &.ant-btn.ant-btn-secondary {
    background-color: #0059ab1a;
    color: #0059ab;
    border: 1px solid #0059ab;
  }
`;

export default Button;
