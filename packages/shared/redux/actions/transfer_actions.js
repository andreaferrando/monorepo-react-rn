import {SHARED_SELECT_ACCOUNT_FROM_TRANSFER, SHARED_SELECT_ACCOUNT_TO_TRANSFER, SHARED_SET_AMOUNT_TO_TRANSFER, SHARED_UNSELECT_ACCOUNT_TO_TRANSFER, SHARED_UNSELECT_ACCOUNT_FROM_TRANSFER, SHARED_POST_TRANSFER, SHARED_COMPLETED_DISPLAYED_TRANSFER, SHARED_LOADING_TRANSFER, SHARED_ERROR_TRANSFER, SHARED_ERROR_DISPLAYED_TRANSFER} from '../constants/reduxTypes';
import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';
import shR from '../../res/R';
import {useMockData} from '../../utils'

export const selectAccountFrom = (from) => async dispatch => {
	dispatch({ type: SHARED_SELECT_ACCOUNT_FROM_TRANSFER, payload:from });
};

export const unselectAccountFrom = (from) => async dispatch => {
	dispatch({ type: SHARED_UNSELECT_ACCOUNT_FROM_TRANSFER });
};

export const selectAccountTo = (to) => async dispatch => {
	dispatch({ type: SHARED_SELECT_ACCOUNT_TO_TRANSFER, payload:to });
};

export const unselectAccountTo = (to) => async dispatch => {
	dispatch({ type: SHARED_UNSELECT_ACCOUNT_TO_TRANSFER });
};

export const setAmount = (amount) => async dispatch => {
	dispatch({ type: SHARED_SET_AMOUNT_TO_TRANSFER, payload:amount });
};

export const completedDisplayed = (amount) => async dispatch => {
	dispatch({ type: SHARED_COMPLETED_DISPLAYED_TRANSFER, payload:amount });
};

export const makeTransfer = (from, to, amount) => async dispatch => {
	if (from === to) {
		dispatch({ type: SHARED_ERROR_TRANSFER, error: shR.strings.transfer.error.transferToSameAccount});
		return
	}
	if (amount <= 0) {
		dispatch({ type: SHARED_ERROR_TRANSFER, error: shR.strings.transfer.error.transferZeroAmount});
		return
	}

	dispatch({ type: SHARED_LOADING_TRANSFER });
	if (useMockData === true) { 
		mockDataMakeTransfer().then( function(payload) {
			dispatch({ type: SHARED_POST_TRANSFER, payload });
		})
	} else {
		firebaseMakeTransfer(from, to, parseFloat(amount)).then( function(payload) {
			dispatch({ type: SHARED_POST_TRANSFER, payload });
		}).catch((errorMessage) => {
			dispatch({ type: SHARED_ERROR_TRANSFER, errorMessage });
		});
	}
};





const firebaseMakeTransfer = (from, to, amount) => {
	return new Promise((resolve, reject) => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user === null) { 
				reject(shR.strings.auth.error.authenticationFailed) 
				return
			}
			firebase.database().ref(user.uid + '/accounts/' + from.number).update({
				amount: from.amount - amount
			}, function(error) {
				if (error) {
					reject(shR.strings.transfer.error.failTransfer);
				} else {
					firebase.database().ref(user.uid + '/accounts/' + to.number).update({
						amount: to.amount + amount
					}, function(error) {
						if (error) {
							reject(shR.strings.transfer.error.failTransfer);
						} else {
							resolve(true);
						}
					});
				}
			});
		});
	});
};


const mockDataMakeTransfer = () => {
	return new Promise((resolve) => {
		resolve(true);
	});
};

