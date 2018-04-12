import React from 'react';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import ListReducers from './reducers';
import List from './list';
import ListSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const listStore = createStore(
  ListReducers,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(ListSagas);

const ContainerList = () => (
  <Provider store={listStore}>
    <List/>
  </Provider>
);

export default ContainerList;
