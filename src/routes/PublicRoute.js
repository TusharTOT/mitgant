import React, { lazy } from "react";
import { useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import NoAuthRoute from "./NoAuthRoute";

const NotFound = lazy(() => import("./../components/Comman/NotFound"));
const Login = lazy(() => import("../containers/Signin/index"));
const SignUp = lazy(() => import("../containers/Signup/index"));
const ForgotPassword = lazy(() => import("../containers/ForgotPassword/index"));
const ResetPassword = lazy(() => import("../containers/ResetPassword/index"));
const SuccessModal = lazy(() => import("./../components/Comman/SuccessModal"));
const VerifiedModal = lazy(() => import("./../components/Comman/VerifiedModal"))
const PublicRoute = ({ match }) => {
    const { loggedIn } = useSelector(({ auth }) => auth);
    const token = localStorage.getItem('token');
    return (
        <>
            <Switch>
                <NoAuthRoute
                    exact
                    path={`${match.path}signup`}
                    isAuthenticated={loggedIn || token}
                    component={SignUp}
                />
                <NoAuthRoute
                    exact
                    path={`${match.path}forgot`}
                    isAuthenticated={loggedIn || token}
                    component={ForgotPassword}
                />
                <NoAuthRoute
                    exact
                    path={`${match.path}reset-password/:id`}
                    isAuthenticated={loggedIn || token}
                    component={ResetPassword}
                />
                <NoAuthRoute
                    exact
                    path={`${match.path}verify-email/:id`}
                    isAuthenticated={loggedIn || token}
                    component={VerifiedModal}
                />
                <NoAuthRoute
                    exact
                    path={`${match.path}successmodal`}
                    isAuthenticated={loggedIn || token}
                    component={SuccessModal}
                />
                <NoAuthRoute
                    exact
                    path={`/login`}
                    isAuthenticated={loggedIn || token}
                    component={Login}
                />
                <NoAuthRoute
                    exact
                    path="*"
                    isAuthenticated={loggedIn || token}
                    component={NotFound}
                />
            </Switch>
        </>
    );
};

export default PublicRoute;
