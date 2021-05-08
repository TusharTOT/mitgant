import { toast } from "react-toastify";
import { errorHandler } from "../helpers/errorHandler";
import axios from "../util/Api";
import { filterParser } from "../util/common";
import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  ALERTS_LIST,
  ALERTS_LIST_RULE,
  IGNORE_SUCCESS,
  NO_DATA,
} from "../constants/ActionTypes";


export const getAlertsList = (pageData, filterOptions) => {
  return (dispatch) => {
    axios.defaults.headers.common.Authorization = `Bearer ${localStorage.token}`;
    const size = pageData.pageSize || 10;
    const page = pageData.pageNumber || 1;

    let basUrl = `customers/alerts?size=${size}&page=${page - 1}`;
    const apiEndpoint = filterParser(basUrl, filterOptions, pageData);
    dispatch({ type: FETCH_START });

    axios
      .get(apiEndpoint)
      .then(({ data }) => {
        if (data) {
          if (data.responseObject.content.length === 0) {
            dispatch({ type: NO_DATA });
            dispatch({ type: ALERTS_LIST, payload: data.responseObject });
          } else {
            dispatch({ type: FETCH_SUCCESS });
            dispatch({ type: ALERTS_LIST, payload: data.responseObject });
          }
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

export const getAlertsRecommendation = (collapseId) => {
  return (dispatch) => {
    axios.defaults.headers.common.Authorization = `Bearer ${localStorage.token}`;
    const apiEndpoint = `rules/recommendation/${collapseId}`;
    dispatch({ type: FETCH_START });
    axios
      .get(apiEndpoint)
      .then(({ data }) => {
        if (data) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: ALERTS_LIST_RULE, payload: data.responseObject });
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
  type: IGNORE_SUCCESS,
  payload,
});

export const alertIgnore = (alertIds) => {
  return (dispatch) => {
    axios.defaults.headers.common.Authorization = `Bearer ${localStorage.token}`;
    dispatch({ type: FETCH_START });
    axios
      .put("/alerts/", { ids: alertIds, message: "demo message" })
      .then(({ data }) => {
        if (data) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch(ignoreAlertSuccess(alertIds));
          if (alertIds.length > 1) {
            toast.success("Alerts ignored successfully");
          } else {
            toast.success("Alert ignored successfully");
          }
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
