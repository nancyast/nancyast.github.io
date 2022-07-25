import { PublicRoute, PrivateRoute } from 'routes';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Spin } from 'antd';
import { StyledSpin } from 'routes/PublicRoute/';

const DashboardPage = lazy(() =>
  import(/* webpackChunkName: "DashboardPage" */ 'containers/DashboardPage')
);
const UserListPage = lazy(() =>
  import(/* webpackChunkName: "UserListPage" */ 'containers/UserListPage')
);
const DataRegisterPage = lazy(() =>
  import(/* webpackChunkName: "DataRegisterPage" */ 'containers/DataRegisterPage')
);
const LoginPage = lazy(() =>
  import(/* webpackChunkName: "LoginPage" */ 'containers/LoginPage')
);
const ChangePasswordPage = lazy(() =>
  import(/* webpackChunkName: "ChangePasswordPage" */ 'containers/ChangePasswordPage')
);
const UserChangePasswordPage = lazy(() =>
  import(
    /* webpackChunkName: "UserChangePasswordPage" */ 'containers/UserChangePasswordPage'
  )
);
const ForgotPasswordPage = lazy(() =>
  import(/* webpackChunkName: "ForgotPasswordPage" */ 'containers/ForgotPasswordPage')
);
const PageNotFound = lazy(() =>
  import(/* webpackChunkName: "404Page" */ 'containers/404Page')
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<Navigate to="/dashboard" replace />} />

        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />

        <Route
          path="user-list"
          element={
            <PrivateRoute>
              <UserListPage />
            </PrivateRoute>
          }
        />

        <Route
          path="data-register"
          element={
            <PrivateRoute>
              <DataRegisterPage />
            </PrivateRoute>
          }
        />

        <Route
          path="user-change-password"
          element={
            <PrivateRoute type="public">
              <UserChangePasswordPage />
            </PrivateRoute>
          }
        />

        {
          // public routes do not require authentication
        }

        <Route
          path="change-password"
          element={
            <PublicRoute>
              <ChangePasswordPage />
            </PublicRoute>
          }
        />

        <Route
          path="forgot-password"
          element={
            <PublicRoute>
              <ForgotPasswordPage />
            </PublicRoute>
          }
        />

        <Route
          path="login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          path="*"
          element={
            <Suspense
              fallback={
                <StyledSpin>
                  <Spin />
                </StyledSpin>
              }
            >
              <PageNotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
