import { Suspense, useMemo, useEffect } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import { Navigate, useNavigate } from 'react-router-dom';
import { subscribedEvents } from 'utils/constant';
import { Spin, message } from 'antd';
import styled from 'styled-components';
import { isAuthenticated } from 'utils/helpers';
import { authenticate } from 'api';
import { LayoutContainer } from 'containers';

const StyledSpin = styled.div`
  padding-top: 200px;
  display: flex;
  justify-content: center;
  align-item: center;
`;

const TIMEOUT = process.env.REACT_APP_IDLE_TIMEOUT_MILISECONDS || 1000 * 60 * 60; // hour

const PrivateRoute = ({ children, type }) => {
  const navigate = useNavigate();

  const onIdle = async () => {
    try {
      await authenticate.logout();
      navigate('/login');
    } catch (error) {
      message.error(error?.message);
    }
  };

  useIdleTimer({
    timeout: TIMEOUT,
    onIdle,
    events: subscribedEvents
  });

  const isAuth = useMemo(() => {
    return isAuthenticated();
  }, []);

  return isAuth ? (
    <LayoutContainer type={type}>
      <Suspense
        fallback={
          <StyledSpin>
            <Spin />
          </StyledSpin>
        }
      >
        {children}
      </Suspense>
    </LayoutContainer>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
