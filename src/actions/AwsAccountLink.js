import { toast } from "react-toastify";
import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  GET_AWS_LINK_ACCOUNT_REGIONS,
  accountConstants,
} from "../constants/ActionTypes";
import axios from "../util/Api";
import { errorHandler } from "../helpers/errorHandler";
import Axios from "../util/axios";


export const getAwsLinkRegions = () => {
  axios.defaults.headers.common.Authorization = `Bearer ${localStorage.token}`;
  var apiEndpoint = "/customers/regions";
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    axios
      .get(apiEndpoint)
      .then(({ data }) => {
        if (data) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({
            type: GET_AWS_LINK_ACCOUNT_REGIONS,
            payload: data,
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

export const awsLinkAccount = (accountDetails) => {
  axios.defaults.headers.common.WS_SESSION = localStorage.socketId;
  axios.defaults.headers.common.Authorization = `Bearer ${localStorage.token}`;
  var apiEndpoint = "/customers/cross-account-link";
  return (dispatch) => {
    dispatch({ type: accountConstants.LINK_ACCOUNT_START });
    dispatch({ type: FETCH_START });
    Axios.post(apiEndpoint, accountDetails)
      .then(({ data }) => {
        if (!data.hasError) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({
            type: accountConstants.LINK_ACCOUNT_SUCCESS,
            payload: data,
          });
        } else {
          dispatch({ type: FETCH_ERROR, payload: data.error });
          toast.error(data.error);
        }
        delete axios.defaults.headers.common.WS_SESSION;
      })
      .catch((error) => {
        dispatch({
          type: accountConstants.LINK_ACCOUNT_FAILURE,
          payload: error.message,
        });
        errorHandler(error, dispatch, toast);
      });
  };
};
