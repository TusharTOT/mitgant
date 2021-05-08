import { FETCH_ERROR } from "../constants/ActionTypes";
export function errorHandler(error, dispatch, toast) {
  dispatch({ type: FETCH_ERROR });
  if (error) {
    if (error.response && error.response.data) {
      // if (error.response.status === 401) {
      //   dispatch(logOut());
      // } else {
      //   toast.error(error.response.data.errors[0]);
      // }
      toast.error(error.response.data.errors[0]);
    } else if (error.message) {
      toast.error("Something went wrong!");
    } else if (!error.message && !error.response.data) {
      toast.error("Something went wrong!");
    }
  }
}
