import { takeLatest, fork, call, put, take } from 'redux-saga/effects';
import * as actions from './actions';
import ActionTypes from './constants';
import { getCollection, toggleFavorite, editItem, deleteItem } from 'utils/api';
import transformItems from 'helpers/transformItems';

export function* fetchCollectionFlow() {
  yield put(actions.fetchCollectionRequest());

  const response = yield call(getCollection);
  console.log('response ', response);

  if (response.errors) {
    yield put(actions.fetchCollectionFailure());
  } else {
    const items = transformItems(response.collection.items);
    yield put(actions.fetchCollectionSuccess(items));
    window.localStorage.setItem('items', JSON.stringify(items));
  }
}

export function* addFavoriteFlow() {
  while (true) {
    const { payload } = yield take(ActionTypes.ADD_FAVORITE);
    yield put(actions.addFavoriteRequest());
    const response = yield call(toggleFavorite, payload);

    if (response.errors) {
      yield put(actions.addFavoriteFailure());
    } else {
      yield put(actions.addFavoriteSuccess(response));
    }
  }
}

export function* editItemFlow() {
  while (true) {
    const { payload } = yield take(ActionTypes.EDIT_ITEM);
    yield put(actions.editItemRequest());
    const response = yield call(editItem, payload);

    if (response.errors) {
      yield put(actions.editItemFailure());
    } else {
      yield put(actions.editItemSuccess(response));
    }
  }
}

export function* deleteItemFlow() {
  while (true) {
    const { payload } = yield take(ActionTypes.DELETE_ITEM);
    yield put(actions.deleteItemRequest());
    const response = yield call(deleteItem, payload);

    if (response.errors) {
      yield put(actions.deleteItemFailure());
    } else {
      yield put(actions.deleteItemSuccess(response));
    }
  }
}

export default function* mainLayoutSaga() {
  yield takeLatest(ActionTypes.FETCH_COLLECTION, fetchCollectionFlow);
  yield fork(addFavoriteFlow);
  yield fork(editItemFlow);
  yield fork(deleteItemFlow);
}
