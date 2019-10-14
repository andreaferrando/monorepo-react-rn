import * as shared from 'shared/redux/actions/auth_actions';

export const loginUser = ({ email, password }) => async dispatch => {
	dispatch(shared.loginUser(email, password, localStorage))
};



