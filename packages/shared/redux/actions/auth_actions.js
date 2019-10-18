import firebase from '@firebase/app';
import '@firebase/auth';
import { SHARED_LOGIN_USER_SUCCESS, SHARED_AUTH_ERROR, SHARED_LOADING_AUTH_USER, SHARED_AUTH_ERROR_DISPLAYED, SHARED_APP_LOADING, SHARED_LOGOUT} from '../constants/reduxTypes';
import Storage from '../../utils/storage'
import {useMockData} from '../../utils'
import shR from '../../res/R'; 

export const loginUser = ({ email, password }) => async dispatch => {
	dispatch({ type: SHARED_LOADING_AUTH_USER });
	if (useMockData === true) { 
		mockDataLoginUser().then( function(resolve) {
			storeToken(resolve.token)
			dispatch({ type: SHARED_LOGIN_USER_SUCCESS, payload: resolve.user });
		})
	} else {
		firebaseLoginUser(email, password).then( function(resolve) {
			storeToken(resolve.token)
			dispatch({ type: SHARED_LOGIN_USER_SUCCESS, payload: resolve.user });
		}).catch((errorMessage) => {
			dispatch({ type: SHARED_AUTH_ERROR, errorMessage });
		});
	}
};

const storeToken = async (token) => {
	const storage = Storage.get()
	try {
        await storage.setItem(shR.strings.auth.jwtToken,token);
    } catch (error) { 
		console.error('AsyncStorage#setItem error: ' + error.message); 
	}
};


export const logoutUser = () => async dispatch => {
	if (useMockData === true) { 
		mockDataLogoutUser().then( function() {
			Storage.get().removeItem('jwtToken');
			dispatch({ type: SHARED_LOGOUT });
		})
	} else {
		firebaseLogoutUser().then( function(resolve) {
			Storage.get().removeItem('jwtToken');
			dispatch({ type: SHARED_LOGOUT });
		}).catch((errorMessage) => {
			dispatch({ type: SHARED_AUTH_ERROR, errorMessage });
		});
	}
};






















const firebaseLoginUser = (email, password) => {
	return new Promise((resolve, reject) => {
		try {
			firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(async() => {
				const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
				const userData = JSON.stringify(user) || '';
				resolve({ token: user.a.c, user: userData });
			}).catch((err) => {
				reject(err.message || shR.strings.auth.error.authenticationFailed);
			});
		} catch (err) {
			reject(err.message || shR.strings.auth.error.authenticationFailed);
		}
	});
};


const mockDataLoginUser = () => {
	return new Promise((resolve) => {
		resolve({ token: "mockToken", user:{"uid":"rkr932nd"} });
	});
};


const firebaseLogoutUser = async () =>  {
	return new Promise(async (resolve, reject) => {
		try {
			await firebase.auth().signOut();
			resolve();
		} catch (err) {
			reject(err.message || shR.strings.auth.error.logoutFailed);
		}
	});
};

const mockDataLogoutUser = () => {
	return new Promise((resolve) => {
		resolve();
	});
};