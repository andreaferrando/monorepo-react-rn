import { combineReducers } from 'redux';
import sharedAuth from 'shared/redux/reducers/auth_reducer';
import sharedAccounts from 'shared/redux/reducers/accounts_reducer';
import sharedTransfer from 'shared/redux/reducers/transfer_reducer';

export default combineReducers({
  sharedAuth,
  sharedAccounts,
  sharedTransfer
});
