import {
  SHARED_FETCH_HOME_DATA,
  SHARED_POST_HOME_DATA,
  SHARED_LOADING_HOME_DATA,
  SHARED_ERROR_HOME_DATA,
  SHARED_ERROR_HOME_DATA_DISPLAYED
} from "../constants/reduxTypes";

const INITIAL_STATE = { data: [], error: "", loading: false };

export default homeData => {
  return INITIAL_STATE;
};

export const actionTypes = [
  SHARED_FETCH_HOME_DATA,
  SHARED_POST_HOME_DATA,
  SHARED_LOADING_HOME_DATA,
  SHARED_ERROR_HOME_DATA,
  SHARED_ERROR_HOME_DATA_DISPLAYED
];

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHARED_FETCH_HOME_DATA:
      return { data: action.payload, loading: false, error: action.error };
    case SHARED_POST_HOME_DATA:
      return {
        data: [...state.data, action.payload],
        loading: false,
        error: null
      };
    case SHARED_LOADING_HOME_DATA:
      return { loading: true, error: null };
    case SHARED_ERROR_HOME_DATA:
      return { loading: false, error: action.payload };
    case ERROR_HOME_DATA_DISPLAYED:
      return { error: null };
    default:
      return state;
  }
};
