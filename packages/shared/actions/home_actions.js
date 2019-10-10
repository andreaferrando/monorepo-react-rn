import { SHARED_FETCH_HOME_DATA,
	SHARED_POST_HOME_DATA,
	SHARED_LOADING_HOME_DATA,
	SHARED_ERROR_HOME_DATA,
	SHARED_ERROR_HOME_DATA_DISPLAYED } from '../constants/reduxTypes';


export const getData = () => async dispatch => {
		dispatch({ type: SHARED_FETCH_HOME_DATA, payload:["shared data"], error: null });
	};
