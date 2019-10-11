import { AsyncStorage } from 'react-native';
import * as shared from 'shared/redux/actions/auth_actions';
import { LOCAL_TYPE } from '../constants/reduxTypes';


export const loginUser = ({ email, password }) => async dispatch => {
	//TODO: save to local storage
	// await AsyncStorage.setItem('user', userData);
	dispatch(shared.loginUser({ email, password }))
};



