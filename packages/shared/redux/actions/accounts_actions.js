import {SHARED_FETCH_ACCOUNTS_DATA} from '../constants/reduxTypes';

export const getData = () => async dispatch => {
	dispatch({ type: SHARED_FETCH_ACCOUNTS_DATA, payload:["shared data"], error: null });
};

// export const logout = () => async dispatch => {
// 	dispatch({ type: SHARED_LOGOUT });
// };