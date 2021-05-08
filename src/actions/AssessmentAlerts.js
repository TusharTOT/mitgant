import { toast } from "react-toastify";
import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  GET_ASSESSMENT_ALERTS,
  ASSESSMENT_IGNORE_SUCCESS
} from "../constants/ActionTypes";
import axios from "../util/Api";
import { filterParser } from "../util/common";
import { errorHandler } from "../helpers/errorHandler";


export const GetAssessmentAlerts = (pageData, filterOptions) => {
  const size = pageData.pageSize || 10;
  const page = pageData.pageNumber || 1;

  let basUrl = `customers/alerts/?assessmentId=${pageData.id}&size=${size}&page=${page - 1}`;
  const apiEndpoint = filterParser(basUrl, filterOptions, pageData)

  return (dispatch) => {
    axios.defaults.headers.common.Authorization = `Bearer ${localStorage.token}`;
    dispatch({ type: FETCH_START });
    axios
      .get(apiEndpoint)
      .then(({ data }) => {
        if (data) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: GET_ASSESSMENT_ALERTS, payload: data });
        } else {
          dispatch({ type: FETCH_ERROR, payload: data.error });
          toast.error(data.error);
        }
      })
      .catch((error) => {
        errorHandler(error, dispatch, toast);
      });
  };
};

const ignoreAlertSuccess = (payload) => ({
  type: ASSESSMENT_IGNORE_SUCCESS, payload
});


export const assessmentAlertIgnore = (alertIds) => {
  return (dispatch) => {
    axios.defaults.headers.common.Authorization = `Bearer ${localStorage.token}`;
    dispatch({ type: FETCH_START });
    axios.put('/alerts/', { ids: alertIds, message: "demo message" })
      .then(({ data }) => {
        if (data) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch(ignoreAlertSuccess(alertIds));
          if (alertIds.length > 1) {
            toast.success("Alerts ignored successfully")
          } else {
            toast.success("Alert ignored successfully")
          }
        } else {
          dispatch({ type: FETCH_ERROR, payload: data.error });
          toast.error(data.error);
        }
      })
      .catch((error) => {
        errorHandler(error, dispatch, toast);
      });
  }
}