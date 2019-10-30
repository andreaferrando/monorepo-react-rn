import {
  SHARED_FETCH_HOME, SHARED_FETCH_HOME_SUCCESS, SHARED_FETCH_HOME_ERROR,
} from '../constants/reduxTypes';

const typesFetchHome = [SHARED_FETCH_HOME, SHARED_FETCH_HOME_SUCCESS, SHARED_FETCH_HOME_ERROR];


export const fetchHome = () => (dispatch, _, services) => dispatch(
  services.api.getAll(services.api.entities.home, typesFetchHome),
);
