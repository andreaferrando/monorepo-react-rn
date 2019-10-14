import * as shared from 'shared/redux/reducers/auth_reducer';

export default (state = {}, action) => {
	const actionTypes = shared.actionTypes
	if (actionTypes.includes(action.type)) {
		return shared.reducer(state, action)
		// return {authData}
	}
	return state
};
