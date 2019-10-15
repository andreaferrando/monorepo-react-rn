import { combineReducers } from 'redux';
import accounts from './accounts_reducer';
import sharedAuth from 'shared/redux/reducers/auth_reducer';

export default combineReducers({
  accounts,
  sharedAuth,
});
