import { createStore, applyMiddleware, compose } from "redux";
import { persistReducer } from "redux-persist";
import ReduxThunk from "redux-thunk";
import { AsyncStorage } from "react-native";

import reducers from "appRedux/reducers";

const persistConfig = {
  timeout: 0,
  key: "root",
  storage: AsyncStorage,
  whiteList: ['sharedAccounts', 'sharedAuth']

};
const persistedReducer = persistReducer(persistConfig, reducers);
//Set the MIGRATION
const store = createStore(
  persistedReducer,
  compose(applyMiddleware(ReduxThunk))
);

export default store;
