import {SHARED_FETCH_HOME_DATA} from '../constants/reduxTypes';


export const getData = () => async dispatch => {
		dispatch({ type: SHARED_FETCH_HOME_DATA, payload:["shared data"], error: null });
	};
