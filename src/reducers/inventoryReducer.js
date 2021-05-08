
import { GET_INVENTORY_SUCCESS } from "../constants/ActionTypes";
const INIT_STATE = {
    service_account: [],
    bucket: [],
    policy: [],
    ec2_instance: [],
    rds: [],
    lambda_functions: [],
    elastic_search: [],
    dynamo_db: []
};

const inventoryReducer = (state = INIT_STATE, action) => {
    switch (action.type) {

        case GET_INVENTORY_SUCCESS:
            if (action.payload.inventoryType.toLowerCase() === "service_account") {
                return {
                    ...state,
                    service_account: action.payload.result,
                };
            }
            if (action.payload.inventoryType.toLowerCase() === "bucket") {
                return {
                    ...state,
                    bucket: action.payload.result,
                };
            }
            if (action.payload.inventoryType.toLowerCase() === "policy") {
                return {
                    ...state,
                    policy: action.payload.result,
                };
            }
            if (action.payload.inventoryType.toLowerCase() === "ec2_instance") {
                return {
                    ...state,
                    ec2_instance: action.payload.result,
                };
            }
            if (action.payload.inventoryType.toLowerCase() === "rds") {
                return {
                    ...state,
                    rds: action.payload.result,
                };
            }
            if (action.payload.inventoryType.toLowerCase() === "lambda_function") {
                return {
                    ...state,
                    lambda_functions: action.payload.result,
                };
            }
            if (action.payload.inventoryType.toLowerCase() === "elastic_search") {
                return {
                    ...state,
                    elastic_search: action.payload.result,
                };
            }
            if (action.payload.inventoryType.toLowerCase() === "dynamo_db") {
                return {
                    ...state,
                    dynamo_db: action.payload.result,
                };
            }
        default:
            return state;
    }
};

export default inventoryReducer;