import { SHARED_FETCH_ACCOUNTS_DATA, SHARED_LOADING_ACCOUNTS, SHARED_ERROR_ACCOUNTS, SHARED_ERROR_DISPLAYED_ACCOUNTS } from '../constants/reduxTypes';

const INITIAL_STATE = { accounts: [], accounts_error: '', accounts_loading: false };

export const actionTypes = [SHARED_FETCH_ACCOUNTS_DATA, SHARED_LOADING_ACCOUNTS, SHARED_ERROR_ACCOUNTS, SHARED_ERROR_DISPLAYED_ACCOUNTS]

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
	case SHARED_FETCH_ACCOUNTS_DATA:
		return {accounts: action.payload, loading: false, error: action.error};
    case SHARED_LOADING_ACCOUNTS:
			return {loading: true, error: null };
    case SHARED_ERROR_ACCOUNTS:
			return {loading: false, error: action.payload };
	case SHARED_ERROR_DISPLAYED_ACCOUNTS:
			return { error: null };
	default:
		return state;
	}
};
