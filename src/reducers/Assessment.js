import { GET_ASSESSMENT } from "../constants/ActionTypes";
const INIT_STATE = {
  assessmentReport: [],
};

const Assessment = (state = INIT_STATE, action) => {
  switch (action.type) {

    case GET_ASSESSMENT:
      return {
        ...state,
        assessmentReport: action.payload,
      };
    default:
      return state;
  }
};

export default Assessment;
