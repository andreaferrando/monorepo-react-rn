import { combineReducers } from 'redux';
import accounts from './accounts_reducer';
import auth from './auth_reducer';

export default combineReducers({
  accounts,
  auth,
});
