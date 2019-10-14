import { combineReducers } from 'redux';
import auth from './auth_reducer';
import accounts from './accounts_reducer';

export default combineReducers({
  accounts,
  auth,
});
