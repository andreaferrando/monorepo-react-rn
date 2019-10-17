import { SHARED_SELECT_ACCOUNT_FROM_TRANSFER, SHARED_SELECT_ACCOUNT_TO_TRANSFER, SHARED_SET_AMOUNT_TO_TRANSFER, SHARED_UNSELECT_ACCOUNT_TO_TRANSFER, SHARED_UNSELECT_ACCOUNT_FROM_TRANSFER,  SHARED_POST_TRANSFER, SHARED_COMPLETED_DISPLAYED_TRANSFER, SHARED_LOADING_TRANSFER, SHARED_ERROR_TRANSFER, SHARED_ERROR_DISPLAYED_TRANSFER } from '../constants/reduxTypes';

const INITIAL_STATE = { accountFrom: null, accountTo:null, amount:0, transfer_completed: null, transfer_error: '', transfer_loading: false };

export const actionTypes = [SHARED_POST_TRANSFER, SHARED_LOADING_TRANSFER, SHARED_ERROR_TRANSFER, SHARED_ERROR_DISPLAYED_TRANSFER]

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
	case SHARED_SELECT_ACCOUNT_FROM_TRANSFER:
		return {...state, accountFrom:action.payload};
	case SHARED_SELECT_ACCOUNT_TO_TRANSFER:
		return {...state, accountTo:action.payload};
	case SHARED_UNSELECT_ACCOUNT_FROM_TRANSFER:
		return {...state, accountFrom:null};
	case SHARED_UNSELECT_ACCOUNT_TO_TRANSFER:
		return {...state, accountTo:null};
	case SHARED_SET_AMOUNT_TO_TRANSFER:
		return {...state, amount:action.payload};	
	case SHARED_POST_TRANSFER:
		return {...state, transfer_completed: action.payload, loading: false, error: action.error};
    case SHARED_LOADING_TRANSFER:
			return {...state, transfer_completed: action.payload, loading: true, error: null };
    case SHARED_ERROR_TRANSFER:
			return {...state, transfer_completed: action.payload, loading: false, error: action.error };
	case SHARED_ERROR_DISPLAYED_TRANSFER:
			return {...state, error: null, transfer_completed: null };
	case SHARED_COMPLETED_DISPLAYED_TRANSFER:
		return INITIAL_STATE;
	default:
		return state;
	}
};
