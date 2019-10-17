import {SHARED_SELECT_ACCOUNT_FROM_TRANSFER, SHARED_SELECT_ACCOUNT_TO_TRANSFER, SHARED_SET_AMOUNT_TO_TRANSFER, SHARED_UNSELECT_ACCOUNT_TO_TRANSFER, SHARED_UNSELECT_ACCOUNT_FROM_TRANSFER, SHARED_POST_TRANSFER, SHARED_COMPLETED_DISPLAYED_TRANSFER, SHARED_LOADING_TRANSFER, SHARED_ERROR_TRANSFER, SHARED_ERROR_DISPLAYED_TRANSFER} from '../constants/reduxTypes';
import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';
import shR from '../../res/R';

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


export const makeTransfer = (from, to, amount) => async dispatch => {
	if (from === to) {
		dispatch({ type: SHARED_ERROR_TRANSFER, error: shR.strings.transfer.error.transferToSameAccount});
		return
	}
	if (amount <= 0) {
		dispatch({ type: SHARED_ERROR_TRANSFER, error: shR.strings.transfer.error.transferZeroAmount});
		return
	}
	const floatAmount = parseFloat(amount)
	firebase.auth().onAuthStateChanged((user) => {
		if (!user) { return }
		firebase.database().ref(user.uid + '/accounts/' + from.number).update({
			amount: from.amount - floatAmount
		}, function(error) {
			if (error) {
				dispatch({ type: SHARED_ERROR_TRANSFER, error: shR.strings.transfer.error.failTransfer});
			} else {
				firebase.database().ref(user.uid + '/accounts/' + to.number).update({
					amount: to.amount + floatAmount
				}, function(error) {
					if (error) {
						dispatch({ type: SHARED_ERROR_TRANSFER, error: shR.strings.transfer.error.failTransfer});
					} else {
						dispatch({ type: SHARED_POST_TRANSFER, payload:true});
					}
				});
			}
		});
	});
};
export const completedDisplayed = (amount) => async dispatch => {
	dispatch({ type: SHARED_COMPLETED_DISPLAYED_TRANSFER, payload:amount });
};