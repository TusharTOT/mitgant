import React from "react";
import { Button } from "react-bootstrap";
import IntegrationCards from "../../../components/App/Integration/IntegrationCards";
import IntegrationList from "./IntegrationList/index";
const index = () => {
  return (
    <div>
      <div className="d-flex justify-content-between  integration-header">
        <div>
          {" "}
          <h3>integrations</h3>
        </div>
        <Button variant="primary">Start Assessment +</Button>
      </div>
      <hr />
      <IntegrationCards />
      <IntegrationList />
    </div>
  );
};

export default index;
