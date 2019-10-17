// import {
//   LOGIN_USER_SUCCESS,
//   AUTH_ERROR,
//   LOADING_AUTH_USER,
//   APP_LOADING,
//   AUTH_ERROR_DISPLAYED,
//   LOGOUT
// } from "../actions/types";

// const INITIAL_STATE = {
//   user: null,
//   error: "",
//   loading: false,
//   isFirstAppLoading: null
// };

// export default (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case LOGIN_USER_SUCCESS:
//       return {
//         ...state,
//         ...INITIAL_STATE,
//         user: action.payload,
//         loading: false
//       };
//     case AUTH_ERROR:
//       return { ...state, error: action.errorMessage, loading: false };
//     case LOADING_AUTH_USER:
//       return { ...state, loading: true, error: "" };
//     case AUTH_ERROR_DISPLAYED:
//       return { ...state, error: null };
//     case APP_LOADING:
//       return {
//         ...state,
//         isFirstAppLoading: action.payload.firstTime,
//         user: action.payload.userLogged
//       };
//     case LOGOUT:
//       return { ...state, ...INITIAL_STATE };
//     default:
//       return state;
//   }
// };
