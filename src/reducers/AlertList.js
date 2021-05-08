import { ALERTS_LIST, ALERTS_LIST_RULE, FILTER_OPTION, IGNORE_SUCCESS } from "../constants/ActionTypes";
const INIT_STATE = {
    alertslist: [],
    alertlistrule: [],
    filteroption: [],
};

const AlertList = (state = INIT_STATE, action) => {
    switch (action.type) {

        case ALERTS_LIST:
            return {
                ...state,
                alertslist: action.payload,
            };
        case ALERTS_LIST_RULE:
            return {
                ...state,
                alertlistrule: action.payload,
            }
        case FILTER_OPTION:
            return {
                ...state,
                filteroption: action.payload,
            }
        case IGNORE_SUCCESS:
            const list = state.alertslist;
            list.content = list.content.filter(item => !action.payload.includes(item.id))
            return {
                ...state,
                alertslist: list
            };
        default:
            return state;
    }
};

export default AlertList;
