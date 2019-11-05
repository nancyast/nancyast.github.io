import ActionTypes from './constants';

const initialState = {
  items: []
};

const mainLayoutReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.FETCH_COLLECTION_SUCCESS:
    case ActionTypes.ADD_FAVORITE_SUCCESS:
    case ActionTypes.EDIT_ITEM_SUCCESS:
    case ActionTypes.DELETE_ITEM_SUCCESS:
      return {
        ...state,
        items: payload
      };
    default:
      return state;
  }
};

export default mainLayoutReducer;
