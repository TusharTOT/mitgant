import React from "react";
import { Tabs, Tab, Button } from "react-bootstrap";
import Assesmentsetting from "./GeneralSetting/AssessmentSetting";
import NotificationSetting from "./GeneralSetting/NotificationSetting";
const index = () => {
  return (
    <div className="setting-wrapper">
      <div className="d-flex justify-content-between  integration-header">
        <div>
          {" "}
          <h3>Setting</h3>
        </div>
        <Button variant="primary">Start Assessment +</Button>
      </div>
      <Tabs className="myClass setting-tabs">
        <Tab eventKey={1} title="General">
          <Assesmentsetting />
          <NotificationSetting />
        </Tab>
        <Tab eventKey={2} title="Cloud Account Management"></Tab>
        <Tab eventKey={3} title="Plan & Biling"></Tab>
      </Tabs>
    </div>
  );
};

export default index;
