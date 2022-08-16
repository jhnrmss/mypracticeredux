import rootReducer  from './Reducer';
import { createStore, applyMiddleware}  from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import TodoReducer from './Todo/Reducer';

const sagaMiddileware = createSagaMiddleware();

const middlewares = [sagaMiddileware]

 const store = createStore(rootReducer,{}, applyMiddleware(...middlewares));

 export default store;