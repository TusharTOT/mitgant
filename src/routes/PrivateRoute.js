import React, { lazy } from "react";
import { useSelector } from "react-redux";
import AuthRoute from "./AuthRoute";
import { Switch } from "react-router-dom";

const AppLayout = lazy(() => import("./../components/AppLayout/index"));
const NotFound = lazy(() => import("../components/Comman/NotFound"));
const AwsLayout = lazy(() => import("../components/AwsLayout/index"));
const Dashboard = lazy(() => import("../containers/App/Dashboard/index"));
const AwsConfigure = lazy(() => import("./../containers/AwsConfigure/index"));
const Assessment = lazy(() => import("./../containers/App/Assessment/index"));
const AlertsList = lazy(() => import("./../containers/App/AlertsList/index"));
const AssessmentAlerts = lazy(() =>
  import("./../containers/App/AssessmentAlerts/index")
);
const Inventory = lazy(() => import("./../containers/App/Inventory/index"));
const AccountDetails = lazy(() =>
  import("./../containers/App/AccountDetails/index")
);
const Integration = lazy(() => import("./../containers/App/Integration/index"));
const Setting = lazy(() => import("./../containers/App/Setting/index"));

const PrivateRoute = ({ match }) => {
  const { loggedIn } = useSelector(({ auth }) => auth);
  const token = localStorage.getItem('token');
  return (
    <>
      <Switch>
        <AuthRoute
          path={`${match.path}/aws`}
          exact
          isAuthenticated={loggedIn || token}
          layout={AwsLayout}
          component={AwsConfigure}
        />
        <AuthRoute
          path={`${match.path}/dashboard`}
          exact
          isAuthenticated={loggedIn || token}
          layout={AppLayout}
          component={Dashboard}
        />
        <AuthRoute
          path={`${match.path}/assessment`}
          exact
          isAuthenticated={loggedIn || token}
          layout={AppLayout}
          component={Assessment}
        />
        <AuthRoute
          path={`${match.path}/assessment/alerts/:id`}
          exact
          isAuthenticated={loggedIn || token}
          layout={AppLayout}
          component={AssessmentAlerts}
        />
        <AuthRoute
          path={`${match.path}/alerts`}
          exact
          isAuthenticated={loggedIn || token}
          layout={AppLayout}
          component={AlertsList}
        />
        <AuthRoute
          path={`${match.path}/inventory`}
          exact
          isAuthenticated={loggedIn || token}
          layout={AppLayout}
          component={Inventory}
        />
        <AuthRoute
          path={`${match.path}/accountdetails`}
          exact
          isAuthenticated={token}
          layout={AppLayout}
          component={AccountDetails}
        />
        <AuthRoute
          path={`${match.path}/integrations`}
          exact
          isAuthenticated={token}
          layout={AppLayout}
          component={Integration}
        />
        <AuthRoute
          path={`${match.path}/settings`}
          exact
          isAuthenticated={token}
          layout={AppLayout}
          component={Setting}
        />
        <AuthRoute
          path="*"
          exact
          isAuthenticated={loggedIn || token}
          component={NotFound}
        />
      </Switch>
    </>
  );
};

export default PrivateRoute;
