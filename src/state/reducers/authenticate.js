import { actionTypes } from 'state/actions/authenticate';

const initialState = {};

const authenticate = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};

export default authenticate;
