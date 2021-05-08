import {
  GET_ASSESSMENT_ALERTS, ASSESSMENT_IGNORE_SUCCESS
} from "../constants/ActionTypes";
const INIT_STATE = {
  assessmentReportAlerts: [],
};

const AssessmentAlerts = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ASSESSMENT_ALERTS:
      return {
        ...state,
        assessmentReportAlerts: action.payload.responseObject,
      };
    case ASSESSMENT_IGNORE_SUCCESS:
      const list = state.assessmentReportAlerts;
      list.content = list.content.filter(item => !action.payload.includes(item.id))
      return {
        ...state,
        assessmentReportAlerts: list
      };
    default:
      return state;
  }
};

export default AssessmentAlerts;
