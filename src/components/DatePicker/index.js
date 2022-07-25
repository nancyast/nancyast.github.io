import { DatePicker as ADatePicker } from 'antd';
import styled from 'styled-components';

const DatePicker = styled(ADatePicker)`
  &.ant-picker {
    width: 100%;
    height: 48px;
    background-color: #fafcfe;
    border: 1px solid #c6c6c6;

    input {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

export default DatePicker;
