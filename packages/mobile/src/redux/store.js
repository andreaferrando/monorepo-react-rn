import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import ReduxThunk from 'redux-thunk';
// import AsyncStorage from '@react-native-community/async-storage';
import { AsyncStorage } from 'react-native';

import reducers from 'appRedux/reducers';

const persistConfig = {
  timeout: 0,
  key: 'root',
  storage: AsyncStorage,
  whiteList: ['accounts', 'auth']
};
const persistedReducer = persistReducer(persistConfig, reducers);
//Set the MIGRATION
const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(ReduxThunk),
  )
);

export default store;
