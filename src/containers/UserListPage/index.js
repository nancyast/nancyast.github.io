import styled from 'styled-components';
import { ExportButton, FilterForm, Table, ExpandButton } from 'components';
import { ReactComponent as ArrowDown } from 'assets/svg/arrow-down-icon.svg';
import dataSource from './dataSource';
import { Checkbox } from 'antd';
import MyCV from 'containers/UserListPage/CV_Nhung.pdf';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack5';
import { useState } from 'react';
import { Pagination } from 'antd';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const MainSection = styled.section`
  background-color: white;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
`;

const ActionSection = styled.div`
  display: flex;
  justify-content: space-between;

  .left-action {
    display: flex;
  }
`;

const handleExpandRow = (expandIconId) => () => {
  const expandIcon = document.getElementById(expandIconId);
  expandIcon.click();
};

const columns = [
  {
    title: '企業名/自治体名',
    dataIndex: 'companyName',
    key: 'companyName',
    width: 150,
    align: 'left',
    sorter: (a, b) => a.age - b.age
  },
  {
    title: '民間/自治体',
    dataIndex: 'personalCompany',
    key: 'personalCompany',
    width: 120,
    align: 'center',
    sorter: (a, b) => a.age - b.age
  },
  {
    title: '代表者氏名',
    dataIndex: 'representativeName',
    key: 'representativeName',
    align: 'center',
    width: 120
  },
  {
    title: 'アカウントID',
    dataIndex: 'accountId',
    key: 'accountId',
    align: 'center',
    width: 160
  },
  {
    title: '初回水登録ID',
    dataIndex: 'initialWaterRegistrationID',
    key: 'initialWaterRegistrationID',
    align: 'center',
    width: 180
  },
  {
    title: '備蓄情報数',
    dataIndex: 'numberOfStockpiledInformation',
    key: 'numberOfStockpiledInformation',
    align: 'center',
    width: 120
  },
  {
    title: '住所',
    dataIndex: 'address',
    key: 'address',
    align: 'center',
    width: 250
  },
  {
    title: '電話番号',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
    align: 'center',
    width: 150
  },
  {
    title: '支援依頼通知設定',
    dataIndex: 'notificationSetting',
    key: 'notificationSetting',
    align: 'center',
    render: () => <Checkbox />,
    width: 150
  },
  {
    title: '登録年月日',
    dataIndex: 'registrationDate',
    key: 'registrationDate',
    align: 'center',
    width: 120
  },
  {
    title: '更新年月日',
    dataIndex: 'updateDate',
    key: 'updateDate',
    align: 'center',
    width: 120
  },
  {
    title: '作用',
    dataIndex: 'action',
    key: 'action',
    render: (text, record) => {
      return <ExpandButton onClick={handleExpandRow(record.expandIconId)} />;
    },
    width: 100,
    align: 'center',
    fixed: 'right'
  }
];

const UserListPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(0);
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  const onPageChange = (page) => {
    setPageNumber(page);
  };
  return (
    <>
      <h1 className="page-title">My CV</h1>
      {numPages > 0 && (
        <Pagination current={pageNumber} total={numPages * 10} onChange={onPageChange} />
      )}
      <div style={{ height: 15 }} />
      <Document file={MyCV} onLoadSuccess={onDocumentLoadSuccess}>
        <Page width={1000} pageNumber={pageNumber} />
      </Document>
      <div style={{ height: 15 }} />
      {numPages > 0 && (
        <Pagination current={pageNumber} total={numPages * 10} onChange={onPageChange} />
      )}
    </>
  );
  // return (
  //   <>
  //     <ActionSection>
  //       <h1 className="page-title">ユーザ情報一覧</h1>
  //       <ExportButton>
  //         <ArrowDown />
  //         <span>書き出す</span>
  //       </ExportButton>
  //     </ActionSection>
  //     <MainSection>
  //       <FilterForm />
  //     </MainSection>
  //     <MainSection>
  //       <Table
  //         style={{
  //           maxWidth: (window?.innerWidth || 1440) - 377
  //         }}
  //         dataSource={dataSource}
  //         columns={columns}
  //         scroll={{
  //           x: (window?.innerWidth || 1440) - 377
  //         }}
  //       />
  //     </MainSection>
  //   </>
  // );
};

export default UserListPage;
