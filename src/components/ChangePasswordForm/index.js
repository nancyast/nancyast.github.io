import { Input, Button } from 'components';
import { Form } from 'antd';
import styled from 'styled-components';
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

const ChangePasswordForm = ({ onSubmit, loading }) => {
  const onFinish = (values) => {
    onSubmit(values);
  };

  return (
    <StyledDiv>
      <div className="log-in">パスワードを変更する</div>
      <div className="description">
        古いパスワードを置き換えるために新しいパスワードを作成してください
      </div>
      <Form onFinish={onFinish} autoComplete="off">
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

        <Form.Item
          dependencies={['password']}
          name="retypePassword"
          rules={[
            { required: true, message: 'Please confirm your password!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error('The two passwords that you entered do not match!')
                );
              }
            })
          ]}
        >
          <Input
            id="confirm"
            name="confirm"
            type="password"
            placeholder="パスワードを再入力してください"
            iconRender={(visible) =>
              visible ? (
                <EyeVisible width={16} height={16} />
              ) : (
                <EyeInVisible width={16} height={16} />
              )
            }
          />
        </Form.Item>

        <Form.Item>
          <Button loading={loading} type="primary" htmlType="submit">
            パスワードを変更する
          </Button>
        </Form.Item>
      </Form>
    </StyledDiv>
  );
};

export default ChangePasswordForm;
