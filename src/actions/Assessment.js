import { toast } from "react-toastify";
import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  GET_ASSESSMENT,
  accountConstants,
  assessmentConstants,
  ALERTS_LIST
} from "../constants/ActionTypes";
import axios from "../util/Api";
import { errorHandler } from "../helpers/errorHandler";

export const GetAssessmentReport = (pageData) => {
  const size = pageData.pageSize || 10;
  const page = pageData.pageNumber || 1;
  const sort = pageData.sortType;
  const sortColumn = "dateCreated";
  let apiEndpoint = "";

  if (sort) {
    apiEndpoint = `customers/assessments?size=${size}&page=${page - 1
      }&sort=${sortColumn},${sort}`;
  } else {
    apiEndpoint = `customers/assessments?size=${size}&page=${page - 1}`;
  }

  return (dispatch) => {
    axios.defaults.headers.common.Authorization = `Bearer ${localStorage.token}`;
    dispatch({ type: FETCH_START });
    axios
      .get(apiEndpoint)
      .then(({ data }) => {
        if (data) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: GET_ASSESSMENT, payload: data });
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

// export const getNewAssessment = (page) => {
//   axios.defaults.headers.common.WS_SESSION = localStorage.socketId;
//   return (dispatch) => {
//     dispatch({ type: accountConstants.LINK_ACCOUNT_START });
//     dispatch({ type: FETCH_START });
//     axios
//       .get('/customers/assessments', config)
//       .then(({ data }) => {
//         if (data) {
//           dispatch({ type: FETCH_SUCCESS });
//           dispatch({ type: assessmentConstants.GET_NEW_ASSESSMENT_SUCCESS, payload: data });
//           setTimeout(async () => {
//             try {
//               const alerts = await axios.get(
//                 `/customers/alerts?size=${page.size}&page=${page.number}`,
//               );
//               dispatch({ type: ALERTS_LIST, payload: data.responseObject });
//             } catch (error) {
//               errorHandler(error, dispatch, toast);
//             }
//           }, 10000);
//         } else {
//           dispatch({ type: FETCH_ERROR, payload: data.error });
//           toast.error(data.error);
//         }
//       })
//       .catch((error) => {
//         dispatch({
//           type: assessmentConstants.GET_NEW_ASSESSMENT_FAILURE,
//           payload: error.response.data
//         });
//         errorHandler(error, dispatch, toast);
//       });
//   };
// };
