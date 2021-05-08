import React from "react";
import { Row, Col } from "react-bootstrap";
import AccountLogComponent from "../../../components/App/AccountDetails/AccountLogComponent";
const AccountLog = () => {
  return (
    <Col md={3}>
      <div className="card h-100">
        <div className="card-body date-section">
          <AccountLogComponent />
        </div>
      </div>
    </Col>
  );
};

export default AccountLog;
