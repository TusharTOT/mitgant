import { toast } from "react-toastify";
import { errorHandler } from "../helpers/errorHandler";
import axios from "../util/Api";
import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  GET_EXP_STATS_SUCCESS,
  GET_CLOUD_STATS_SUCCESS,
} from "../constants/ActionTypes";



export const getExpectedStats = () => {
  return (dispatch) => {
    axios.defaults.headers.common.Authorization = `Bearer ${localStorage.token}`;
    dispatch({ type: FETCH_START });
    axios
      .get("/customers/dashboard-expected-state")
      .then(({ data }) => {
        if (data) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({
            type: GET_EXP_STATS_SUCCESS,
            payload: data.responseObject,
          });
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

export const getCloudStats = () => {
  return (dispatch) => {
    axios.defaults.headers.common.Authorization = `Bearer ${localStorage.token}`;
    dispatch({ type: FETCH_START });
    axios
      .get("/customers/dashboard-cloud-state")
      .then(({ data }) => {
        if (data) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({
            type: GET_CLOUD_STATS_SUCCESS,
            payload: data.responseObject,
          });
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
