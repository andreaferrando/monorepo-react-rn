import { SHARED_LOGIN_USER_SUCCESS, SHARED_AUTH_ERROR, SHARED_LOADING_AUTH_USER, SHARED_AUTH_ERROR_DISPLAYED, SHARED_LOGOUT} from '../constants/reduxTypes';
import { isEmpty } from '@firebase/util';

const INITIAL_STATE = { user: null, auth_error: null, auth_loading:null, isAuthenticated: null };

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SHARED_LOGIN_USER_SUCCESS:
			return { ...state, ...INITIAL_STATE, user: action.payload, loading: false, isAuthenticated: !isEmpty(action.payload) };
		case SHARED_AUTH_ERROR:
			return { ...state, error: action.errorMessage, loading: false, isAuthenticated:false };
		case SHARED_LOADING_AUTH_USER:
			return { ...state, loading: true, error: '' };
		case SHARED_AUTH_ERROR_DISPLAYED:
			return { ...state, error: null, isAuthenticated:false };
		case SHARED_LOGOUT:
			console.log("SHARED_LOGOUT")
			return { ...state, ...INITIAL_STATE, isAuthenticated:false };
		default:
			return state;
	}
};













