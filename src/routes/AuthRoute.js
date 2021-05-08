import React, { Suspense } from "react";
import { Route, Redirect } from "react-router-dom";
import Loader from "../Loader/Loader";
import { useSelector } from 'react-redux';
const AuthRoute = ({
  component: Component,
  isAuthenticated,
  layout: Layout,
  ...rest
}) => {
  const { crossAccountLinked } = useSelector(({ auth }) => auth);
  const userInfo = JSON.parse(localStorage.getItem("userData"));
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          if (
            props.location.pathname === '/app/aws' &&
            (crossAccountLinked || (userInfo && userInfo.crossAccountLinked))
          ) {
            return <Redirect to="/app/dashboard" />;
          }
          return (
            <Suspense fallback={<Loader />}>
              {Layout ? (
                <Layout>
                  <Component {...props} />
                </Layout>
              ) : (
                <Component {...props} />
              )}
            </Suspense>
          );
        }
        return (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location.pathname },
            }}
          />
        );
      }}
    />
  );
};

export default AuthRoute;
