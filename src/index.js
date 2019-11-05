import React from 'react';
import ReactDOM from 'react-dom';
import './globalStyles.scss';
import App from 'containers/App';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import rootSaga from './rootSaga';

const initialState = {};
const store = configureStore(initialState);
store.runSaga(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
