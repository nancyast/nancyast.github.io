import { Table as ATable } from 'antd';
import styled from 'styled-components';

const StyledTable = styled(ATable)`
  .ant-table-thead th.ant-table-column-sort {
    background: #0059ab1a;
  }

  th.ant-table-cell {
    font-family: 'Arial Bold', sans-serif;
    line-height: 24px;

    &:before {
      content: '';
      width: 0;
      display: none;
    }
  }

  td.ant-table-column-sort {
    background: #0059ab1a;
  }

  .ant-table-row-expand-icon-cell {
    padding: 0;
    display: none;
  }

  .ant-table-expand-icon-col {
    width: 0;
    display: none;
  }

  .ant-table-cell {
    white-space: nowrap;
    font-size: 16px;
    line-height: 24px;

    &.ant-table-column-has-sorters {
      &:hover {
        background: #0059ab1a;
      }
    }
  }

  .user-list-page-table-row-odd {
    background-color: #f6f9ff;

    .ant-table-cell-fix-right.ant-table-cell-fix-right-first {
      background-color: #f6f9ff;
    }

    & + tr.ant-table-expanded-row-level-1 .ant-table-expanded-row-fixed {
      background-color: white;
    }
  }

  .user-list-page-table-row-even {
    background-color: white;

    .ant-table-cell-fix-right.ant-table-cell-fix-right-first {
      background-color: white;
    }

    & + tr.ant-table-expanded-row-level-1 .ant-table-expanded-row-fixed {
      background-color: #f6f9ff;
    }
  }

  .ant-table-expanded-row.ant-table-expanded-row-level-1 {
    * {
      position: unset !important;
    }
  }

  .ant-pagination {
    font-size: 16px;
  }

  .ant-pagination-item-link {
    border: none;
    color: #0059ab;
  }

  .ant-pagination-disabled .ant-pagination-item-link {
    border: none;
    color: #7b7b7b;
  }

  .ant-pagination-item {
    border: 1px solid white;

    a {
      color: #7b7b7b;
    }
  }

  .ant-pagination-item-active {
    background-color: #0059ab;
    border-radius: 8px;

    a {
      color: white;
    }
  }
`;

const ExpandedRowContent = ({ text }) => {
  const renderText = () => {
    const texts = [];
    for (let i = 0; i < 100; i++) {
      texts.push(text);
    }
    return texts;
  };
  return <div>{renderText()}</div>;
};

export default (props) => {
  return (
    <StyledTable
      expandable={{
        expandedRowRender: (record) => (
          <div>
            <ExpandedRowContent text={record.companyName} />
          </div>
        ),
        expandIcon: (props) => {
          return (
            <button
              style={{ display: 'none' }}
              id={props.record.expandIconId}
              onClick={(e) => props.onExpand(props.record, e)}
            />
          );
        }
      }}
      rowClassName={(_, index) => {
        if (index % 2) {
          return 'user-list-page-table-row-even';
        }
        return 'user-list-page-table-row-odd';
      }}
      pagination={{
        position: ['bottomCenter'],
        pageSize: 5,
        total: 50
      }}
      {...props}
    />
  );
};
