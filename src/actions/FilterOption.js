import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR, FILTER_OPTION } from '../constants/ActionTypes';
import { toast } from "react-toastify";
import { errorHandler } from "../helpers/errorHandler";
import axios from "../util/Api";


export const getFilterOptions = () => {
    axios.defaults.headers.common.Authorization = `Bearer ${localStorage.token}`;
    return (dispatch) => {
        const apiEndpoint = `customers/alert-filteroptions`;
        dispatch({ type: FETCH_START });
        axios.get(apiEndpoint)
            .then(({ data }) => {
                if (data) {
                    dispatch({ type: FETCH_SUCCESS });
                    dispatch({ type: FILTER_OPTION, payload: data.responseObject });
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