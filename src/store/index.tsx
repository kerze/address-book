import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();

let middlewares = applyMiddleware(sagaMiddleware);

const store = createStore(reducers, compose(middlewares));

sagaMiddleware.run(rootSaga);

export default store;
