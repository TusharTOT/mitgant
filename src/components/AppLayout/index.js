import React, { lazy } from "react";
import { withRouter } from "react-router-dom";

const AppHeader = lazy(() => import("./AppHeader"));
const MainSidebar = lazy(() => import("./MainSidebar"));

const Layout = (props) => {
  const { children } = props;
  return (
    <div className="dashboard container-fluid">
      <div className="row flex-nowrap">
        <div id="sidemenu">
          <MainSidebar {...props} />
        </div>
        <div className="rightcontent">
          <AppHeader />
          <main className="middle">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Layout);
