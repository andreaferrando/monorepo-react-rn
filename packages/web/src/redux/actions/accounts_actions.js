import * as shared from 'shared/redux/actions/accounts_actions';
import { LOCAL_TYPE } from '../constants/reduxTypes';


export const getData = () => async dispatch => {
	dispatch(shared.getData())
};
