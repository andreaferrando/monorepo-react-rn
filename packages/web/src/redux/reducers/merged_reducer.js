// import { LOCAL_TYPE } from '../constants/reduxTypes';
// import * as shared from 'shared/redux/reducers/auth_reducer';

// const INITIAL_STATE = { data: [] };

// export default (state = INITIAL_STATE, action) => {
// 	const actionTypes = shared.actionTypes
// 	if (actionTypes.includes(action.type)) {
// 		return shared.reducer(state, action)
// 		// const sharedData = shared.reducer(state, action)
// 		// return {...state, data:sharedData}
// 	}
// 	switch (action.type) {
// 		case LOCAL_TYPE:
// 			return { ...state, data: action.payload};
// 		default:
// 			return state
// 	}
// };