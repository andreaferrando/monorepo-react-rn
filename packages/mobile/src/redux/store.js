import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { apiMiddleware } from 'redux-api-middleware';
import { persistReducer } from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import { AsyncStorage } from 'react-native';
import rootReducer from 'shared/redux/reducers';
import API from 'shared/services/';

const services = {
  api: API,
};

const persistConfig = {
  timeout: 0,
  key: 'root',
  storage: AsyncStorage,
  whiteList: [],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
// Set the MIGRATION
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk.withExtraArgument(services), apiMiddleware)),
);

export default store;
