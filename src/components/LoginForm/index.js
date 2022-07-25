import { Input, Button } from 'components';
import { Form } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as EyeVisible } from 'assets/svg/eye-visible.svg';
import { ReactComponent as EyeInVisible } from 'assets/svg/eye-invisible.svg';

const StyledDiv = styled.div`
  width: 516px;
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
  }

  .description {
    color: #333;
    font-size: 16px;
    line-height: 24px;
    margin-top: 16px;
    margin-bottom: 50px;
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

const LoginForm = ({ onLogin, loading }) => {
  const onFinish = (values) => {
    onLogin(values);
  };

  return (
    <StyledDiv>
      <div className="log-in">ログイン</div>
      <div className="description">
        アカウントにアクセスするには、情報を入力してください
      </div>
      <Form onFinish={onFinish} autoComplete="off">
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input id="email" name="email" placeholder="あなたのメール" type="text" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="パスワード"
            iconRender={(visible) =>
              visible ? (
                <EyeVisible width={16} height={16} />
              ) : (
                <EyeInVisible width={16} height={16} />
              )
            }
          />
        </Form.Item>

        <StyledForgotPassword>
          <Link to="/forgot-password">パスワードをお忘れですか？</Link>
        </StyledForgotPassword>
        <Form.Item>
          <Button loading={loading} type="primary" htmlType="submit">
            ログインを取得
          </Button>
        </Form.Item>
      </Form>
    </StyledDiv>
  );
};

export default LoginForm;
