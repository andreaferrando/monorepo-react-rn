import { combineReducers } from 'redux';
import sharedAuth from 'shared/redux/reducers/auth_reducer';
import sharedAccounts from 'shared/redux/reducers/accounts_reducer';

export default combineReducers({
  sharedAuth,
  sharedAccounts,
});
