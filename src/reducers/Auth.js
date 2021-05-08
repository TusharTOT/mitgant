import { SIGNOUT, LOGIN, REGISTER, authConstants } from "../constants/ActionTypes";
import initialState from './initialState';

const auth = (state = initialState.auth, action) => {
  switch (action.type) {
    case SIGNOUT: {
      return {
        ...state,
        token: null,
        loggedIn: false
      };
    }
    case LOGIN: {
      return {
        ...state,
        loggedIn: true,
        ...action.payload.responseObject,
      };
    }
    case REGISTER: {
      return {
        ...state,
        ...action.payload.responseObject,
      };
    }
    case authConstants.UPDATE_LINK_SUCCESS:
      localStorage.setItem("crossAccountLinked", action.payload.status)
      return {
        ...state,
        crossAccountLinked: action.payload.status,
        accountNo: action.payload.details.accountNo,
      };
    case authConstants.UPDATE_LINK_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default auth;
