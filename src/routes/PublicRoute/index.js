import { Navigate } from 'react-router-dom';
import { Suspense } from 'react';
import { Spin } from 'antd';
import styled from 'styled-components';
import { PublicLayout } from 'components';
import { isAuthenticated } from 'utils/helpers';

export const StyledSpin = styled.div`
  padding-top: 200px;
  display: flex;
  justify-content: center;
  align-item: center;
`;

const PublicRoute = (props) => {
  const { children } = props;
  const isAuth = isAuthenticated();

  return isAuth ? (
    <Navigate to="/dashboard" replace />
  ) : (
    <PublicLayout>
      <Suspense
        fallback={
          <StyledSpin>
            <Spin />
          </StyledSpin>
        }
      >
        {children}
      </Suspense>
    </PublicLayout>
  );
};

export default PublicRoute;
