import { Select as ASelect } from 'antd';
import styled from 'styled-components';

const Select = styled(ASelect)`
  &.ant-select-single .ant-select-selector {
    height: 48px;
    background-color: #fafcfe;
    border: 1px solid #c6c6c6;

    .ant-select-selection-item {
      display: inline-block;
      padding: 12px 0;
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

export default Select;
