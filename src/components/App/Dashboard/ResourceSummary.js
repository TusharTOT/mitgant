import React from "react";
import { Row, Col } from "react-bootstrap";
// import Tour from "reactour";
import userIcon from "../../../assets/Images/Webapp/svg/user.svg";
import rightarrow from "../../../assets/Images/Webapp/svg/right-arrow.svg";
import reporticon from "../../../assets/Images/Webapp/svg/report_icon.svg";
import arrowup from "../../../assets/Images/Webapp/svg/arrow-up.svg";
import bucketIcon from "../../../assets/Images/Webapp/svg/bucket.svg";
import dynamodbIcon from "../../../assets/Images/Webapp/svg/dynamodb.svg";
import ec2Icon from "../../../assets/Images/Webapp/svg/ec2.svg";
import eksIcon from "../../../assets/Images/Webapp/svg/eks.svg";
import lambdaIcon from "../../../assets/Images/Webapp/svg/lambda.svg";
import permissionsIcon from "../../../assets/Images/Webapp/svg/permissions.svg";
import rdsdbIcon from "../../../assets/Images/Webapp/svg/rds-db.svg";
import rdsUserIcon from "../../../assets/Images/Webapp/svg/rds-user.svg";
const count = [
  userIcon,
  bucketIcon,
  dynamodbIcon,
  ec2Icon,
  eksIcon,
  lambdaIcon,
  permissionsIcon,
  rdsdbIcon,
  rdsUserIcon,
];

const ResourceSummary = (props) => {
  const { addResource, cloudStats } = props;
  return (
    <div className="resource-summary mt-2">
      <div className="card">
        <div className="card-body pb-0">
          <div className="card-header bg-transparent px-0 pt-0">
            <h4 className="mb-0">Resource Summary</h4>
          </div>
          <div className="summary-card">
            <Row>
              {/* {count.map((item) => {
                return (
                  <Col sm={6} md={6} lg={4} xl={3}>
                    <div className="card border-0 shadow-none">
                      <h4>Users</h4>
                      <div className="d-flex align-items-center countdiv">
                        <img src={item} alt="user" />
                        <h3 className="mb-0">26</h3>
                      </div>
                      <div className="bottompart d-flex align-items-center">
                        <span className="badge badge-danger badge-pill mr-2">
                          <img src={arrowup} alt="up" /> 12
                        </span>{" "}
                        <label className="mb-0">then last period</label>
                      </div>
                    </div>
                  </Col>
                );
              })} */}

              <Col sm={6} md={6} lg={4} xl={3}>
                <div className="card border-0 shadow-none">
                  <h4>Users</h4>
                  <div className="d-flex align-items-center countdiv">
                    <img src={userIcon} alt="user" />
                    <h3 className="mb-0">{cloudStats.noofiamusers}</h3>
                  </div>
                  <div className="bottompart d-flex align-items-center">
                    <span className="badge badge-danger badge-pill mr-2">
                      <img src={arrowup} alt="up" /> 12
                    </span>{" "}
                    <label className="mb-0">then last period</label>
                  </div>
                </div>
              </Col>
              <Col sm={6} md={6} lg={4} xl={3}>
                <div className="card border-0 shadow-none">
                  <h4>Buckets</h4>
                  <div className="d-flex align-items-center countdiv">
                    <img src={bucketIcon} alt="user" />
                    <h3 className="mb-0">{cloudStats.noofbuckets}</h3>
                  </div>
                  <div className="bottompart d-flex align-items-center">
                    <span className="badge badge-danger badge-pill mr-2">
                      <img src={arrowup} alt="up" /> 12
                    </span>{" "}
                    <label className="mb-0">then last period</label>
                  </div>
                </div>
              </Col>
              <Col sm={6} md={6} lg={4} xl={3}>
                <div className="card border-0 shadow-none">
                  <h4>Policies</h4>
                  <div className="d-flex align-items-center countdiv">
                    <img src={permissionsIcon} alt="user" />
                    <h3 className="mb-0">{cloudStats.noofpolicies}</h3>
                  </div>
                  <div className="bottompart d-flex align-items-center">
                    <span className="badge badge-danger badge-pill mr-2">
                      <img src={arrowup} alt="up" /> 12
                    </span>{" "}
                    <label className="mb-0">then last period</label>
                  </div>
                </div>
              </Col>
              <Col sm={6} md={6} lg={4} xl={3}>
                <div className="card border-0 shadow-none">
                  <h4>EC2 Instances</h4>
                  <div className="d-flex align-items-center countdiv">
                    <img src={ec2Icon} alt="user" />
                    <h3 className="mb-0">{cloudStats.noofinstances}</h3>
                  </div>
                  <div className="bottompart d-flex align-items-center">
                    <span className="badge badge-danger badge-pill mr-2">
                      <img src={arrowup} alt="up" /> 12
                    </span>{" "}
                    <label className="mb-0">then last period</label>
                  </div>
                </div>
              </Col>
              <Col sm={6} md={6} lg={4} xl={3}>
                <div className="card border-0 shadow-none">
                  <h4>RDS Instances</h4>
                  <div className="d-flex align-items-center countdiv">
                    <img src={rdsdbIcon} alt="user" />
                    <h3 className="mb-0">{cloudStats.noofrdsdatabases}</h3>
                  </div>
                  <div className="bottompart d-flex align-items-center">
                    <span className="badge badge-danger badge-pill mr-2">
                      <img src={arrowup} alt="up" /> 12
                    </span>{" "}
                    <label className="mb-0">then last period</label>
                  </div>
                </div>
              </Col>
              <Col sm={6} md={6} lg={4} xl={3}>
                <div className="card border-0 shadow-none">
                  <h4>Lambda Functions</h4>
                  <div className="d-flex align-items-center countdiv">
                    <img src={lambdaIcon} alt="user" />
                    <h3 className="mb-0">{cloudStats.noofawslambdas}</h3>
                  </div>
                  <div className="bottompart d-flex align-items-center">
                    <span className="badge badge-danger badge-pill mr-2">
                      <img src={arrowup} alt="up" /> 12
                    </span>{" "}
                    <label className="mb-0">then last period</label>
                  </div>
                </div>
              </Col>
              <Col sm={6} md={6} lg={4} xl={3}>
                <div className="card border-0 shadow-none">
                  <h4>DynamoDB Table</h4>
                  <div className="d-flex align-items-center countdiv">
                    <img src={dynamodbIcon} alt="user" />
                    <h3 className="mb-0">{cloudStats.noofdynamodb}</h3>
                  </div>
                  <div className="bottompart d-flex align-items-center">
                    <span className="badge badge-danger badge-pill mr-2">
                      <img src={arrowup} alt="up" /> 12
                    </span>{" "}
                    <label className="mb-0">then last period</label>
                  </div>
                </div>
              </Col>
              <Col sm={6} md={6} lg={4} xl={3}>
                <div className="card border-0 shadow-none">
                  <h4>EKS</h4>
                  <div className="d-flex align-items-center countdiv">
                    <img src={eksIcon} alt="user" />
                    <h3 className="mb-0">{cloudStats.noofeks}</h3>
                  </div>
                  <div className="bottompart d-flex align-items-center">
                    <span className="badge badge-danger badge-pill mr-2">
                      <img src={arrowup} alt="up" /> 12
                    </span>{" "}
                    <label className="mb-0">then last period</label>
                  </div>
                </div>
              </Col>
              <Col sm={6} md={6} lg={4} xl={3}>
                <div className="card border-0 shadow-none">
                  <h4>I am groups</h4>
                  <div className="d-flex align-items-center countdiv">
                    <img src={rdsUserIcon} alt="user" />
                    <h3 className="mb-0">{cloudStats.noofiamgroups}</h3>
                  </div>
                  <div className="bottompart d-flex align-items-center">
                    <span className="badge badge-danger badge-pill mr-2">
                      <img src={arrowup} alt="up" /> 12
                    </span>{" "}
                    <label className="mb-0">then last period</label>
                  </div>
                </div>
              </Col>
              <Col
                sm={6}
                md={6}
                lg={4}
                xl={3}
                className="add-summary text-center py-5 px-3"
              >
                <button className="btn btn-link" onClick={addResource}>
                  + Add resource
                </button>
                <p className="mb-0">You can display up to 10 resources</p>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceSummary;
