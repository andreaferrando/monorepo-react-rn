import * as shared from 'shared/redux/actions/auth_actions';

export const loginUser = ({ email, password }) => async dispatch => {
	dispatch(shared.loginUser({ email, password }))
	// const sharedAction = shared.loginUser({ email, password })
	// const dispatched = dispatch(sharedAction)
	// console.log("***SHTYPEEEEEE")
	// console.log(sharedAction.type)
	// if (dispatched.type == "SHARED_LOGIN_USER_SUCCESS") {
	// 	localStorage.setItem('jwtToken',user.token);
	// }
	
};



