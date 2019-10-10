import * as shared from 'shared';
import { LOCAL_TYPE } from '../constants/reduxTypes';


export const getData = () => async dispatch => {
	dispatch(shared.getData())
};
