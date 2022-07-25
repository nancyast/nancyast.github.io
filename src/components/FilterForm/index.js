import { Input, Button, SearchInput, DatePicker, Select } from 'components';
import { Form as AForm, Row, Col, Checkbox } from 'antd';
import styled from 'styled-components';
import { ReactComponent as Icon } from 'assets/svg/search-icon.svg';
import moment from 'moment';

const dateFormat = 'DD/MM/YYYY';

const FormWrapper = styled.div`
  .ant-form-item-label label {
    color: #333;
    font-size: 16px;
  }
`;

const SearchIcon = styled.span`
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: inline-block;
`;

const Form = styled(AForm)`
  .ant-form-item {
    width: 100%;
    flex: 1 0 0;
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;

    .ant-form-item-control {
      align-self: stretch;
    }
  }

  .ant-col-6,
  .ant-col-12 {
    display: flex;
    align-items: flex-end;
  }

  .last-row {
    .ant-form-item {
      margin-bottom: 0;
    }
  }
`;

const initialValues = {
  userSearch: '',
  productName: '',
  postalCode: '',
  initialWaterRegistrationID: '',
  stock: '',
  detailedAddress: '',
  registrationDate: moment(),
  updateDate: moment(),
  expiryDate: '1',
  requestSupport: false,
  publicInfo: false
};

const FilterForm = ({ onSubmit, loading }) => {
  const onFinish = (values) => {
    console.log('values ', values);
    // onSubmit(values);
  };
  return (
    <FormWrapper>
      <Form initialValues={initialValues} onFinish={onFinish} autoComplete="off">
        <Row gutter={8}>
          <Col className="gutter-row" span={9}>
            <Form.Item label="ユーザ検索" name="userSearch">
              <SearchInput
                id="userSearch"
                name="userSearch"
                type="text"
                suffix={
                  <SearchIcon>
                    <Icon />
                  </SearchIcon>
                }
                addonAfter={null}
              />
            </Form.Item>
          </Col>
          <Col span={7}>
            <Form.Item label="品名" name="productName">
              <Input id="productName" name="productName" type="text" />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label="郵便番号" name="postalCode">
              <Input id="postalCode" name="postalCode" type="text" />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label="初回水登録ID" name="initialWaterRegistrationID">
              <Input
                id="initialWaterRegistrationID"
                name="initialWaterRegistrationID"
                type="text"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={8}>
          <Col span={6}>
            <Form.Item label="在庫" name="stock">
              <Input id="stock" name="stock" type="text" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="詳細住所" name="detailedAddress">
              <Input id="detailedAddress" name="detailedAddress" type="text" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="登録年月日" name="registrationDate">
              <DatePicker placeholder="日付を選択" format={dateFormat} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="更新年月日" name="updateDate">
              <DatePicker placeholder="日付を選択" format={dateFormat} />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={8} className="last-row">
          <Col span={6}>
            <Form.Item label="賞味期限" name="expiryDate">
              <Select onChange={() => ({})}>
                <Select.Option value="1">1ヶ月</Select.Option>
                <Select.Option value="2">3ヶ月</Select.Option>
                <Select.Option value="3">6ヶ月</Select.Option>
                <Select.Option value="4">1年</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name="requestSupport" valuePropName="checked">
              <Checkbox>サポートをリクエストする</Checkbox>
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item name="publicInfo" valuePropName="checked">
              <Checkbox>公衆</Checkbox>
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item>
              <Button loading={loading} type="primary" htmlType="submit">
                探す
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </FormWrapper>
  );
};

export default FilterForm;
