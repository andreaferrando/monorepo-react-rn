import firebase from '@firebase/app';
import '@firebase/auth';
import { SHARED_LOGIN_USER_SUCCESS, SHARED_AUTH_ERROR, SHARED_LOADING_AUTH_USER, SHARED_AUTH_ERROR_DISPLAYED, SHARED_APP_LOADING, SHARED_LOGOUT} from '../constants/reduxTypes';

export const loginUser = (email, password, storage) => async dispatch => {
	dispatch({ type: SHARED_LOADING_AUTH_USER });
	try {
		firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(async() => {
			const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
			loginUserSuccess(dispatch, user, storage);
		}).catch((err) => {
			loginUserFail(dispatch, err.message || 'Authentication Failed');
		});
	} catch (err) {
		loginUserFail(dispatch, err.message || 'Authentication Failed');
	}
};

const loginUserFail = (dispatch, error) => {
	console.log(error)
	dispatch({ type: SHARED_AUTH_ERROR, errorMessage: error });
};

const loginUserSuccess = async (dispatch, user, storage) => {
	const userData = JSON.stringify(user) || '';
	try {
        await storage.setItem('jwtToken',user.a.c);
    } catch (error) {
        console.error('AsyncStorage#setItem error: ' + error.message);
	}
	dispatch({ type: SHARED_LOGIN_USER_SUCCESS, payload: userData });
};


export const logout = () => async dispatch => {
	try {
		await firebase.auth().signOut();
		// GlobalFunctions.resetUser();
		// GlobalFunctions.clearAsyncStorage();
    	// GlobalFunctions.setIsNotFirstTime();
		dispatch({ type: SHARED_LOGOUT });
	} catch (err) {
		dispatch({ type: SHARED_AUTH_ERROR, payload: err.message || 'Failed logging out' });
	}
};
