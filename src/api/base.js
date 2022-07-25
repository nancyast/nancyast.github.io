import localStorage, { ID_TOKEN, ACCESS_TOKEN } from 'utils/localStorage';
import { isJsonString } from './utils';
import { store } from '../index';
import { RESET_ALL_AFTER_LOGOUT } from 'utils/constant';

const getDefaultHeaders = () => ({
  Accept: '*/*',
  'Content-Type': 'application/json;charset=UTF-8',
  'Accept-Encoding': 'gzip, deflate, br',
  Connection: 'keep-alive'
});

export const isNetworkOffline = () => !window.navigator.onLine;

const request = async (url, options = {}) => {
  const requestOptions = {
    headers: getDefaultHeaders(),
    ...options
  };
  let response;

  if (isNetworkOffline()) {
    throw Error('No internet connection');
  }

  try {
    response = await fetch(url, requestOptions);
  } catch (error) {
    console.log('error ', error);
    throw Error('Remote API server did not respond');
  }

  const responseText = await response.text();

  if (!response.ok) {
    // handle api error
  }

  switch (response.status) {
    case 200:
    case 201:
    case 204: {
      return isJsonString(responseText) ? JSON.parse(responseText) : {};
    }
    case 401: {
      if (window.location.pathname !== '/login') {
        localStorage.clear(ID_TOKEN);
        localStorage.clear(ACCESS_TOKEN);
        store.dispatch({ type: RESET_ALL_AFTER_LOGOUT });
        window.location.replace('/login');
      } else {
        const error = isJsonString(responseText)
          ? JSON.parse(responseText)
          : { error_message: 'Server error' };

        throw new Error(error?.error_message || error?.message);
      }
      break;
    }
    default: {
      const error = isJsonString(responseText)
        ? JSON.parse(responseText)
        : { error_message: 'Server error' };

      throw new Error(error?.error_message || error?.message);
    }
  }
};

const authRequest = (url, options = {}) => {
  const idToken = localStorage.load('idToken');
  const authenticatedRequestOptions = {
    ...options,
    headers: {
      ...getDefaultHeaders(),
      Authorization: idToken
    }
  };

  return request(url, authenticatedRequestOptions);
};

export default {
  request,
  authRequest
};
