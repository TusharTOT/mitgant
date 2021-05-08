import {
  GET_EXP_STATS_SUCCESS,
  GET_CLOUD_STATS_SUCCESS,
} from "../constants/ActionTypes";

const INIT_STATE = {
  stats: [],
  cloudStats: [],
};

const dashboardReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_EXP_STATS_SUCCESS:
      return {
        ...state,
        stats: action.payload,
      };
    case GET_CLOUD_STATS_SUCCESS:
      return {
        ...state,
        cloudStats: action.payload,
      };
    default:
      return state;
  }
};

export default dashboardReducer;
