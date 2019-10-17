import {SHARED_FETCH_ACCOUNTS_DATA, SHARED_LOADING_ACCOUNTS, SHARED_ERROR_ACCOUNTS, SHARED_ERROR_DISPLAYED_ACCOUNTS} from '../constants/reduxTypes';
import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';

export const fetchAccounts = () => async dispatch => {
	firebase.auth().onAuthStateChanged((user) => {
		if (!user) { return }
		dispatch({ type: SHARED_LOADING_ACCOUNTS });
		// createAccounts(user)
		firebase.database().ref(user.uid + '/accounts/').once('value').then(function(snapshot) {
			const obj = snapshot.val()
			var accounts = Object.keys(obj).map(function(key) {
				var newObj = obj[key];
				newObj.number = key
				return newObj
			});
			dispatch({ type: SHARED_FETCH_ACCOUNTS_DATA, payload: accounts });
		})
	})
};

function createAccounts(user) {
	const accountNumber = '90128754'
	const sortcode = '604039'
	const amount = '540'
	const currency = 'gbp'
	const type = 'standard'
	firebase.database().ref(user.uid + '/accounts/' + accountNumber).set({
		sortcode: sortcode,
		amount: amount,
		currency : currency,
		type: type
	  }, function(error) {
		if (error) {
		  // The write failed...
		  console.log(error)
		} else {
		  // Data saved successfully!
		}
	  });
}