import { toast } from "react-toastify";
import { errorHandler } from "../helpers/errorHandler";
import axios from "../util/Api";
import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_ERROR,
    GET_INVENTORY_SUCCESS
} from "../constants/ActionTypes";


export const getInventory = (inventoryType) => {
    axios.defaults.headers.common.Authorization = `Bearer ${localStorage.token}`;
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        axios.get(`/customers/resources/${inventoryType}`)
            .then(({ data }) => {
                if (data) {
                    dispatch({ type: FETCH_SUCCESS });
                    dispatch({ type: GET_INVENTORY_SUCCESS, payload: { result: data.responseObject, inventoryType } });
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