import { SHARED_FETCH_HOME, SHARED_FETCH_HOME_SUCCESS, SHARED_FETCH_HOME_ERROR } from '../constants/reduxTypes';

const INITIAL_STATE = {
  homeData: [], homeLoading: false, homeError: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHARED_FETCH_HOME:
      return { ...state, homeLoading: true };
    case SHARED_FETCH_HOME_SUCCESS:
      return { ...state, homeData: action.payload, homeLoading: false };
    case SHARED_FETCH_HOME_ERROR:
      return { ...state, homeError: action.payload, homeLoading: false };
    default:
      return state;
  }
};
