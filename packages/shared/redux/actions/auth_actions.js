import firebase from '@firebase/app';
import '@firebase/auth';
import { SHARED_LOGIN_USER_SUCCESS, SHARED_AUTH_ERROR, SHARED_LOADING_AUTH_USER, SHARED_AUTH_ERROR_DISPLAYED, SHARED_APP_LOADING, SHARED_LOGOUT} from '../constants/reduxTypes';

export const loginUser = ({ email, password }) => async dispatch => {
	dispatch({ type: SHARED_LOADING_AUTH_USER });
	try {
		firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(async() => {
			const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
			loginUserSuccess(dispatch, user);
		}).catch((err) => {
			loginUserFail(dispatch, err.message || 'Authentication Failed');
		});
	} catch (err) {
		loginUserFail(dispatch, err.message || 'Authentication Failed');
	}
};

const loginUserFail = (dispatch, error) => {
	dispatch({ type: SHARED_AUTH_ERROR, errorMessage: error });
};

const loginUserSuccess = async (dispatch, user) => {
	const userData = JSON.stringify(user) || '';
	dispatch({ type: SHARED_LOGIN_USER_SUCCESS, payload: userData });
};


// export const logout = () => async dispatch => {
// 	try {
// 		await firebase.auth().signOut();
// 		GlobalFunctions.resetUser();
// 		GlobalFunctions.clearAsyncStorage();
//     GlobalFunctions.setIsNotFirstTime();
// 		// const persistor = persistStore(store);
//     // persistor.purge();
// 		dispatch({ type: LOGOUT });
// 	} catch (err) {
// 		console.log(err);
// 		dispatch({ type: AUTH_ERROR, payload: err.message || 'Failed logging out' });
// 	}
// };
