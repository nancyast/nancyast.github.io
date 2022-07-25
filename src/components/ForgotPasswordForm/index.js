import { Input, Button } from 'components';
import { Form } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledDiv = styled.div`
  width: 600px;
  @media (max-width: 576px) {
    width: 100%;
    min-width: 350px;
  }
  padding: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;

  .log-in {
    font-size: 40px;
    line-height: 48px;
    color: #0059ab;
    font-family: 'Arial Bold', sans-serif;
    text-align: center;
  }

  .description {
    color: #333;
    font-size: 16px;
    line-height: 24px;
    margin-top: 16px;
    margin-bottom: 50px;
    text-align: center;
  }

  form {
    width: 100%;

    .ant-form-item {
      margin-bottom: 16px;
    }
  }
`;

const StyledForgotPassword = styled.div`
  width: 100%;
  text-align: left;
  font-size: 16px;
  margin-bottom: 16px;
  line-height: 24px;
  font-family: 'Arial Bold', sans-serif;
`;

const ForgotPasswordForm = ({ onSubmit, loading }) => {
  const onFinish = (values) => {
    onSubmit(values);
  };

  return (
    <StyledDiv>
      <div className="log-in">パスワードを忘れましたか？</div>
      <div className="description">
        アカウントに関連付けられているメールアドレスを入力してください。
        パスワードをリセットする手順を記載したメールを送信します。
      </div>
      <Form onFinish={onFinish} autoComplete="off">
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input name="email" type="text" placeholder="あなたのメール" />
        </Form.Item>
        <StyledForgotPassword>
          <Link to="/login">待って、パスワードを覚えてる</Link>
        </StyledForgotPassword>
        <Form.Item>
          <Button loading={loading} type="primary" htmlType="submit">
            パスワードを再設定する
          </Button>
        </Form.Item>
      </Form>
    </StyledDiv>
  );
};

export default ForgotPasswordForm;
