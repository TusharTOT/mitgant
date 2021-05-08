import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import Auth from "./Auth";
import Common from "./Common";
import Assessment from "./Assessment";
import AlertList from "./AlertList";
import AssessmentAlerts from "./AssessmentAlerts";
import AwsAccountLink from "./AwsAccountLink"
import dashboardReducer from "./dashboardReducer";
import inventoryReducer from "./inventoryReducer";
import notificationReducer from './NotificationReducer';

const reducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth: Auth,
    common: Common,
    assessment: Assessment,
    alertlist: AlertList,
    assessmentAlerts: AssessmentAlerts,
    awsLinkAccount: AwsAccountLink,
    dashboardReducer,
    inventoryReducer,
    notificationReducer
  });

export default reducers;
