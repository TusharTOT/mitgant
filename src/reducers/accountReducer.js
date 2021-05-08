import initialState from './initialState';
import { accountConstants } from '../constants/ActionTypes';

const accountReducer = (state = initialState.accountLink, action) => {
    switch (action.type) {
        case accountConstants.LINK_ACCOUNT_SUCCESS:
            return { ...state, ...action.payload };
        case accountConstants.LINK_ACCOUNT_FAILURE:
            return { ...state };
        case accountConstants.DELETE_ACCOUNT_SUCCESS:
            return { ...state };
        case accountConstants.DELETE_ACCOUNT_FAILURE:
            return { ...state };
        default:
            return state;
    }
};

export default accountReducer;
