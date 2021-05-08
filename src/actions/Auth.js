import { toast } from "react-toastify";
import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  LOGIN,
  SIGNOUT,
  REGISTER,
  authConstants
} from "../constants/ActionTypes";
import axios from "../util/Api";
import { errorHandler } from "../helpers/errorHandler";


export const logOut = () => (dispatch) => {
  delete axios.defaults.headers.common.Authorization;
  localStorage.clear();
  dispatch({ type: SIGNOUT });
};


export const UserLogin = (data) => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    axios
      .post("user/login", data)
      .then(({ data }) => {
        if (data) {
          localStorage.clear();
          localStorage.setItem("token", data.responseObject.token);
          localStorage.setItem("userData", JSON.stringify(data.responseObject));
          dispatch({ type: LOGIN, payload: data });
          dispatch({ type: FETCH_SUCCESS });
          toast.success("User login successfully");
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
export const UserRegister = (data, history) => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    axios
      .post("customers", data)
      .then(({ data }) => {
        if (data) {
          // dispatch({ type: REGISTER, payload: data });
          dispatch({ type: FETCH_SUCCESS });
          toast.success("Registration has been success.");
          history.push({
            pathname: "/successmodal",
            state: { from: "registration" },
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

export const ForgetPassword = (email, history) => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    axios
      .get(`customers/password-request/${email}`)
      .then(({ data }) => {
        if (data) {
          // dispatch({ type: REGISTER, payload: data });
          dispatch({ type: FETCH_SUCCESS });
          toast.success(data.successMessage);
          history.push({
            pathname: "/successmodal",
            state: { from: "forgotpassword" },
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

export const PasswordReset = (data, resetToken, history) => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    axios
      .post(`customers/change-password/${resetToken}`, data)
      .then(({ data }) => {
        if (data) {
          dispatch({ type: FETCH_SUCCESS });
          toast.success(data.successMessage);
          history.push({
            pathname: "/successmodal",
            state: { from: "resetpassword" },
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

export const EmailVerification = (activationToken, history) => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    axios
      .get(`customers/confirmation/${activationToken}`)
      .then(({ data }) => {
        if (data) {
          dispatch({ type: FETCH_SUCCESS });
          toast.success(data.successMessage);
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

const linkUpdateSuccess = (payload) => ({
  type: authConstants.UPDATE_LINK_SUCCESS,
  payload,
});

const linkUpdateFailure = (error) => ({
  type: authConstants.UPDATE_LINK_FAILURE,
  payload: error,
});


export const linkUpdate = (bool, details) => async (dispatch) => {
  try {
    if (typeof bool === 'boolean') {
      dispatch(linkUpdateSuccess({ status: bool, details }));
    }
  } catch (error) {
    dispatch(linkUpdateFailure(error));
  }
};
export const PasswordChange = (data) => {
  axios.defaults.headers.common.Authorization = `Bearer ${localStorage.token}`;
  const { password } = data;
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    axios
      .post("customers/change-password", { password })
      .then(({ data }) => {
        if (!data.hasError) {
          dispatch({ type: FETCH_SUCCESS });
          toast.success(data.successMessage);
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

export const DeleteAccount = (Logout, history) => {
  axios.defaults.headers.common.Authorization = `Bearer ${localStorage.token}`;
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    axios.delete("/customers");
    dispatch({ type: FETCH_SUCCESS });
    toast.success("Your account has been deleted");
    dispatch(logOut);
    // history.push("./login");
    history.push({ pathname: "baseUrl/${id}?tab=${tab}" });
  };
};
