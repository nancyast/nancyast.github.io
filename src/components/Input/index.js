import { Input as AInput } from 'antd';
import styled from 'styled-components';

const TextInput = styled(AInput)`
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  height: 48px;
  padding: 12px;
  border: 1px solid #c6c6c6;
  background-color: #fafcfe;
  &::placeholder {
    color: #333;
  }
`;

const Password = styled(AInput.Password)`
  width: 100%;
  height: 48px;
  padding: 0 12px 0 0;
  border: 1px solid #c6c6c6;
  background-color: #fafcfe;
  input.ant-input {
    padding: 12px;
    font-size: 16px;
    line-height: 24px;
    &::placeholder {
      color: #333;
    }
  }
`;

const Input = ({ type = 'text', ...props }) => {
  if (type === 'text') {
    return <TextInput {...props} />;
  } else if (type === 'password') {
    return <Password {...props} />;
  }
};

export default Input;
