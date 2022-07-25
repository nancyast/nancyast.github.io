import { combineReducers } from 'redux';
import authenticate from 'state/reducers/authenticate';
import { RESET_ALL_AFTER_LOGOUT } from 'utils/constant';

const appReducer = combineReducers({
  authenticate
});

const rootReducer = (state, action) => {
  if (action?.type === RESET_ALL_AFTER_LOGOUT) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default rootReducer;
