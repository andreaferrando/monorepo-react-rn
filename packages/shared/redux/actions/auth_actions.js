import {
  // SHARED_LOGIN,
  SHARED_LOGIN_SUCCESS,
  // SHARED_LOGIN_ERROR,
  // SHARED_LOGOUT,
  SHARED_LOGOUT_SUCCESS,
  SHARED_LOGOUT_ERROR,
} from '../constants/reduxTypes';
import Storage from '../../utils/storage';
import shR from '../../res/R';

// const types_login = [SHARED_LOGIN, SHARED_LOGIN_SUCCESS, SHARED_LOGIN_ERROR];
// const types_logout = [SHARED_LOGOUT, SHARED_LOGOUT_SUCCESS, SHARED_LOGOUT_ERROR];

export const loginUser = ({ email, password }) => async (dispatch, getstate, services) => {
  // temporary, TO REMOVE
  const jwtToken = 'test_jwtToken';

  const storage = Storage.get();
  const userData = { uid: 'fiuhwe4iufbew' };
  try {
    await storage.setItem(shR.strings.auth.jwtToken, jwtToken);
  } catch (error) {
    console.error(`AsyncStorage#setItem error: ${error.message}`);
  }
  dispatch({ type: SHARED_LOGIN_SUCCESS, payload: userData });
};

export const logoutUser = () => async (dispatch, getstate, services) => {
  try {
    Storage.get().removeItem(shR.strings.auth.jwtToken);
    dispatch({ type: SHARED_LOGOUT_SUCCESS });
  } catch (err) {
    dispatch({
      type: SHARED_LOGOUT_ERROR,
      payload: err.message || 'Failed logging out',
    });
  }
};
