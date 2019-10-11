import { SHARED_LOGIN_USER_SUCCESS, SHARED_AUTH_ERROR, SHARED_LOADING_AUTH_USER, SHARED_AUTH_ERROR_DISPLAYED, SHARED_APP_LOADING, SHARED_LOGOUT} from '../constants/reduxTypes';

const INITIAL_STATE = { user: null, error: '', loading:false };

export default authData => {
  return INITIAL_STATE
};

export const actionTypes = [SHARED_LOGIN_USER_SUCCESS, SHARED_AUTH_ERROR, SHARED_LOADING_AUTH_USER, SHARED_AUTH_ERROR_DISPLAYED, SHARED_APP_LOADING, SHARED_LOGOUT]

export const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SHARED_LOGIN_USER_SUCCESS:
			return { ...state, ...INITIAL_STATE, user: action.payload, loading: false };
		case SHARED_AUTH_ERROR:
			return { ...state, error: action.errorMessage, loading: false };
		case SHARED_LOADING_AUTH_USER:
			return { ...state, loading: true, error: '' };
		case SHARED_AUTH_ERROR_DISPLAYED:
			return { ...state, error: null };
		case SHARED_APP_LOADING:
			return { ...state,
				isFirstAppLoading: action.payload.firstTime,
				user: action.payload.userLogged };
		case SHARED_LOGOUT:
			return { ...state, ...INITIAL_STATE };
		default:
			return state;
	}
};













