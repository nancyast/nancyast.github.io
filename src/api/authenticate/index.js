import { apiUrl } from 'api/utils';
import localStorage, { ID_TOKEN, ACCESS_TOKEN } from 'utils/localStorage';
import baseApi from '../base';
import { store } from '../../index';
import { RESET_ALL_AFTER_LOGOUT } from 'utils/constant';

export const LOGIN_URL = apiUrl('auth/token');
export const LOGOUT_URL = apiUrl('auth/revoke');
export const CHANGE_PASSWORD_FIRSTTIME_URL = apiUrl('auth/new-password-required');
export const CHANGE_PASSWORD_URL = apiUrl('auth/change-password');
export const RESET_PASSWORD_URL = apiUrl('auth/reset-password');

export default {
  login: async ({ email, password }) => {
    const data = await baseApi.request(LOGIN_URL, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      })
    });

    const isAdmin = data?.Profile
      ? data?.Profile['cognito:groups']?.includes('admin')
      : false;

    return {
      isAdmin: isAdmin,
      challengeName: data?.ChallengeName,
      session: data?.Session,
      idToken: data?.AuthenticationResult?.IdToken,
      accessToken: data?.AuthenticationResult?.AccessToken,
      userProfile: data?.Profile
    };
  },
  logout: async () => {
    const accessToken = localStorage.load(ACCESS_TOKEN);

    await baseApi.authRequest(LOGOUT_URL, {
      method: 'POST',
      body: JSON.stringify({
        accessToken
      })
    });

    localStorage.clear(ID_TOKEN);
    localStorage.clear(ACCESS_TOKEN);
    store.dispatch({ type: RESET_ALL_AFTER_LOGOUT });
  },
  changePassword: async ({ email, password, session }) => {
    return await baseApi.request(CHANGE_PASSWORD_FIRSTTIME_URL, {
      method: 'PUT',
      body: JSON.stringify({
        session,
        email,
        password
      })
    });
  },
  userChangePassword: async ({ email, oldPassword, newPassword, accessToken }) => {
    return await baseApi.authRequest(CHANGE_PASSWORD_URL, {
      method: 'PUT',
      body: JSON.stringify({
        email,
        oldPassword,
        newPassword,
        accessToken
      })
    });
  },
  forgotPassword: async ({ email }) => {
    return await baseApi.request(`${RESET_PASSWORD_URL}/${email}`, {
      method: 'GET'
    });
  },
  resetPassword: async ({ email, code, password }) => {
    return await baseApi.request(RESET_PASSWORD_URL, {
      method: 'POST',
      body: JSON.stringify({
        email,
        emailCode: code,
        newPassword: password
      })
    });
  }
};
