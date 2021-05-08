import {
  GET_AWS_LINK_ACCOUNT_REGIONS,
} from "../constants/ActionTypes";
const INIT_STATE = {
  awsAccountRegions: [],
};

const AwsAccountLink = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_AWS_LINK_ACCOUNT_REGIONS:
      return {
        ...state,
        awsAccountRegions: action.payload.responseObject,
      };
    default:
      return state;
  }
};
export default AwsAccountLink;
