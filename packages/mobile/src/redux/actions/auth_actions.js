// import firebase from '@firebase/app';
// import '@firebase/auth';
// import { AsyncStorage } from 'react-native';
// // import { persistStore } from 'redux-persist';
// // import store from '../../redux/actions'
// import * as GlobalFunctions from '../../Global';
//
// import { LOGIN_USER_SUCCESS,
// 	AUTH_ERROR,
// 	LOADING_AUTH_USER,
// 	APP_LOADING,
// 	AUTH_ERROR_DISPLAYED,
// 	LOGOUT } from './types';
//
// export const signUpUser = ({ email, password, passwordConfirmation }) => async dispatch => {
// 		if (password !== passwordConfirmation) {
// 			dispatch({ type: AUTH_ERROR, errorMessage: 'Passwords not matching' });
// 			return;
// 		}
// 		dispatch({ type: LOADING_AUTH_USER });
// 		try {
// 			const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
// 			firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(async() => {
// 				loginUserSuccess(dispatch, user);
// 			}).catch((err) => {
// 				dispatch({ type: AUTH_ERROR, errorMessage: err.message || 'Registration Failed' });
// 			});
// 		} catch (err) {
// 			dispatch({ type: AUTH_ERROR, errorMessage: err.message || 'Registration Failed' });
// 		}
// 	};
//
// export const loginUser = ({ email, password }) => async dispatch => {
// 		dispatch({ type: LOADING_AUTH_USER });
// 		try {
// 			firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(async() => {
// 				const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
// 				loginUserSuccess(dispatch, user);
// 			}).catch((err) => {
// 				loginUserFail(dispatch, err.message || 'Authentication Failed');
// 			});
// 		} catch (err) {
// 			loginUserFail(dispatch, err.message || 'Authentication Failed');
// 		}
// 	};
//
// const loginUserFail = (dispatch, error) => {
// 	dispatch({ type: AUTH_ERROR, errorMessage: error });
// };
//
// const loginUserSuccess = async (dispatch, user) => {
// 	const userData = JSON.stringify(user) || '';
// 	await AsyncStorage.setItem('user', userData);
// 	dispatch({ type: LOGIN_USER_SUCCESS, payload: userData });
// };
//
// export const loadingApp = (callback) => async dispatch => {
// 		const storageValue = await AsyncStorage.getItem('storageVarIsFirstAppLoading') || true;
// 		const user = await AsyncStorage.getItem('user');
// 		dispatch({ type: APP_LOADING,
// 			payload: { firstTime: JSON.parse(storageValue), userLogged: user } });
// 		callback(JSON.parse(storageValue), user);
// };
//
// export const errorAuthDidDisplay = () => {
// 	return { type: AUTH_ERROR_DISPLAYED };
// };
//
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
