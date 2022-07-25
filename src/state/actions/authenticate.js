export const actionTypes = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS'
};

export const loginSuccess = (payload) => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload
});
