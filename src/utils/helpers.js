import localStorage from 'utils/localStorage';

export const isAuthenticated = () => {
  const { idToken, accessToken } = localStorage.loadTokens();
  // return Boolean(idToken && accessToken);
  return true;
};
