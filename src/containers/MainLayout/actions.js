import ActionTypes from './constants';

export const fetchCollection = () => ({
  type: ActionTypes.FETCH_COLLECTION
});

export const fetchCollectionRequest = () => ({
  type: ActionTypes.FETCH_COLLECTION_REQUEST
});

export const fetchCollectionSuccess = payload => ({
  type: ActionTypes.FETCH_COLLECTION_SUCCESS,
  payload
});

export const fetchCollectionFailure = payload => ({
  type: ActionTypes.FETCH_COLLECTION_FAILURE,
  payload
});

export const addFavorite = payload => ({
  type: ActionTypes.ADD_FAVORITE,
  payload
});

export const addFavoriteRequest = () => ({
  type: ActionTypes.DELETE_ITEM_REQUEST
});

export const addFavoriteSuccess = payload => ({
  type: ActionTypes.ADD_FAVORITE_SUCCESS,
  payload
});

export const addFavoriteFailure = payload => ({
  type: ActionTypes.ADD_FAVORITE_FAILURE,
  payload
});

export const editItem = payload => ({
  type: ActionTypes.EDIT_ITEM,
  payload
});

export const editItemRequest = () => ({
  type: ActionTypes.EDIT_ITEM_REQUEST
});

export const editItemSuccess = payload => ({
  type: ActionTypes.EDIT_ITEM_SUCCESS,
  payload
});

export const editItemFailure = payload => ({
  type: ActionTypes.EDIT_ITEM_FAILURE,
  payload
});

export const deleteItem = payload => ({
  type: ActionTypes.DELETE_ITEM,
  payload
});

export const deleteItemRequest = () => ({
  type: ActionTypes.DELETE_ITEM_REQUEST
});

export const deleteItemSuccess = payload => ({
  type: ActionTypes.DELETE_ITEM_SUCCESS,
  payload
});

export const deleteItemFailure = payload => ({
  type: ActionTypes.DELETE_ITEM_FAILURE,
  payload
});
