import {SHARED_FETCH_ACCOUNTS_DATA, SHARED_LOADING_ACCOUNTS, SHARED_ERROR_ACCOUNTS, SHARED_ERROR_DISPLAYED_ACCOUNTS} from '../constants/reduxTypes';
import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';
import {useMockData} from '../../utils'
import shR from '../../res/R'; 

export const fetchAccounts = () => async dispatch => {
	dispatch({ type: SHARED_LOADING_ACCOUNTS });
	if (useMockData === true) { 
		mockDataFetchAccounts().then( function(accounts) {
			dispatch({ type: SHARED_FETCH_ACCOUNTS_DATA, payload: accounts });
		})
	} else {
		firebaseFetchAccounts().then( function(accounts) {
			dispatch({ type: SHARED_FETCH_ACCOUNTS_DATA, payload: accounts });
		}).catch((errorMessage) => {
			dispatch({ type: SHARED_ERROR_ACCOUNTS, errorMessage });
		});
	}
};


const firebaseFetchAccounts = () => {
	return new Promise((resolve, reject) => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user === null) { 
				reject(shR.strings.auth.error.authenticationFailed) 
				return
			}
			firebase.database().ref(user.uid + '/accounts/').once('value').then(function(snapshot) {
				const obj = snapshot.val()
				var accounts = Object.keys(obj).map(function(key) {
					var newObj = obj[key];
					newObj.number = key
					return newObj
				});
				resolve(accounts);
			})
		})
	});
};

const mockDataFetchAccounts = () => {
	return new Promise((resolve) => {
		const accounts = [
			{number: '90128754',
			sortcode: '604039',
			amount: 540,
			currency: 'gbp',
			type: 'standard'},
			{number: '1123456',
			sortcode: '6040s9',
			amount: 340,
			currency: 'gbp',
			type: 'standard'}
		]
		resolve(accounts);
	});
};

// function createAccounts(user) {
// 	const accountNumber = '90128754'
// 	const sortcode = '604039'
// 	const amount = 540
// 	const currency = 'gbp'
// 	const type = 'standard'
// 	firebase.database().ref(user.uid + '/accounts/' + accountNumber).set({
// 		sortcode: sortcode,
// 		amount: amount,
// 		currency : currency,
// 		type: type
// 	  }, function(error) {
// 		if (error) {
// 		  // The write failed...
// 		  console.log(error)
// 		} else {
// 		  // Data saved successfully!
// 		}
// 	  });
// }