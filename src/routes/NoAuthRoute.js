import React, { Suspense } from "react";
import { Route, Redirect } from "react-router-dom";
import Loader from "../Loader/Loader";
import { useSelector } from 'react-redux';
const NoAuthRoute = ({
  component: Component,
  isAuthenticated,
  layout: Layout,
  ...rest
}) => {
  const { crossAccountLinked } = useSelector(({ auth }) => auth);
  const userInfo = JSON.parse(localStorage.getItem("userData"));
  const returnUrl = (crossAccountLinked || (userInfo && userInfo.crossAccountLinked)) ? '/app/dashboard' : '/app/aws';
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          return <Redirect to={returnUrl} />;
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
      }}
    />
  );
};

export default NoAuthRoute;
