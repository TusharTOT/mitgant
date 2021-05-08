import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  NO_DATA,
} from "../constants/ActionTypes";

const INIT_STATE = {
  error: "",
  loading: false,
  noData: false,
};

const common = (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...state,
        loading: true,
        noData: false,
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...state,
        error: false,
        loading: false,
        noData:false
      };
    }
    case NO_DATA: {
      return {
        ...state,
        error: false,
        loading: false,
        noData: true,
      };
    }
    case FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default:
      return state;
  }
};

export default common;
