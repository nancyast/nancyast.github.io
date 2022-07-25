import { useState } from 'react';
import { LoginForm, Modal, Button } from 'components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authenticate } from 'api';
import localStorage, { ID_TOKEN, ACCESS_TOKEN, SESSION } from 'utils/localStorage';
import { message } from 'antd';
import styled from 'styled-components';
import { loginSuccess } from 'state/actions/authenticate';
import { ReactComponent as WarningIcon } from 'assets/svg/warning-icon.svg';

const CHALLENGE_NAME = 'NEW_PASSWORD_REQUIRED';

const StyledDiv = styled.div`
  .warning-icon {
    margin-top: 60px;
    margin-bottom: 16px;
    text-align: center;
  }
`;

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const onLogin = async (formData) => {
    try {
      setLoading(true);
      const response = await authenticate.login({
        email: formData.email,
        password: formData.password
      });

      dispatch(loginSuccess({ ...response, email: formData.email }));
      setLoading(false);

      if (response?.challengeName && response.challengeName === CHALLENGE_NAME) {
        localStorage.save(SESSION, response.session);
        navigate('/change-password');
      } else {
        if (response.isAdmin) {
          localStorage.save(ID_TOKEN, response.idToken);
          localStorage.save(ACCESS_TOKEN, response.accessToken);
          navigate('/dashboard');
        } else {
          message?.error('Only admin role can access this site!');
        }
      }
    } catch (error) {
      message?.error(error.message);
      setLoading(false);
    }
  };

  const onRetry = () => {
    setVisible(false);
  };

  return (
    <>
      <LoginForm onLogin={onLogin} loading={loading} />
      <Modal
        visible={visible}
        onOk={onRetry}
        onCancel={onRetry}
        footer={
          <Button onClick={onRetry} type="primary">
            リトライ
          </Button>
        }
      >
        <StyledDiv>
          <div className="warning-icon">
            <WarningIcon width={80} height={80} />
          </div>
          <h1>警告</h1>
          <h3>
            5回失敗したため、アカウントがロックされました。 5分後にロックが解除されます
          </h3>
        </StyledDiv>
      </Modal>
    </>
  );
};

export default LoginPage;
