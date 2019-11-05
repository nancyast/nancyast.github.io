import { fork } from 'redux-saga/effects';
import mainLayoutSaga from 'containers/MainLayout/saga';
// import collectionPageSaga from 'containers/CollectionPage/saga';

export default function* rootSaga() {
  yield fork(mainLayoutSaga);
  // yield fork(collectionPageSaga);
  // code after fork-effect
}
