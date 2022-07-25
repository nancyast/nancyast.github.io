import styled from 'styled-components';
import { Input as AInput } from 'antd';

const SearchInput = styled(AInput.Search)`
  &.ant-input-search {
    height: 48px;
    padding: 0;
    border-radius: 8px;

    .ant-input-wrapper {
      .ant-input {
        width: 100%;
        height: 48px;
        padding: 10px 8px 10px 16px;
        border-radius: 8px;
        background: #f6f9ff;
        font-size: 16px;
        line-height: 24px;

        &::placeholder {
          color: #c4c4c4;
        }
      }

      .ant-input-affix-wrapper {
        padding: 0;
        border: none;
        background: #f6f9ff;
        border-radius: 8px;

        .ant-input-suffix {
          margin: 0 10px;
        }
      }

      .ant-input-group-addon {
        display: none;
      }
    }
  }
`;

export default SearchInput;
