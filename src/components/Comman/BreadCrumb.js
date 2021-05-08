import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import LeftArrow from "../../assets/Images/Webapp/svg/leftarrow.svg";
import Download from "../../assets/Images/Webapp/svg/download.svg";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
const BreadCrumb = (props) => {

  return (
    <Breadcrumb className="custome_breadcrumb">
      <Nav.Item>
        <Nav.Link as={Link} to="/app/assessment" className="pl-0">
          <img src={LeftArrow} />
        </Nav.Link>
      </Nav.Item>
      <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/app/assessment" }} className="mt-2">Assessments / Reports</Breadcrumb.Item>
      <Nav.Item>
        <Nav.Link>
          <img src={Download} className="mr-2"></img>Download This Report
        </Nav.Link>
      </Nav.Item>
    </Breadcrumb>
  );
};

export default BreadCrumb;
