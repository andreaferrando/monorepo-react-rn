import { SHARED_FETCH_ACCOUNTS_DATA, SHARED_LOADING_ACCOUNTS_DATA, SHARED_ERROR_ACCOUNTS_DATA, SHARED_ERROR_ACCOUNTS_DATA_DISPLAYED } from '../constants/reduxTypes';

const INITIAL_STATE = { accounts: [], accounts_error: '', accounts_loading: false };

export default accounts => {
  return INITIAL_STATE
};

export const actionTypes = [SHARED_FETCH_ACCOUNTS_DATA, SHARED_LOADING_ACCOUNTS_DATA, SHARED_ERROR_ACCOUNTS_DATA, SHARED_ERROR_ACCOUNTS_DATA_DISPLAYED]

export const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SHARED_FETCH_ACCOUNTS_DATA:
			return {accounts: action.payload, loading: false, error: action.error};
    case SHARED_LOADING_ACCOUNTS_DATA:
			return {loading: true, error: null };
    case SHARED_ERROR_ACCOUNTS_DATA:
			return {loading: false, error: action.payload };
	case ERROR_ACCOUNTS_DATA_DISPLAYED:
			return { error: null };
	default:
		return state;
	}
};
