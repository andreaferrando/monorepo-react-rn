import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import homeData from './home_reducer';
import authData from './auth_reducer';

export default combineReducers({
  homeData,
  authData
});
