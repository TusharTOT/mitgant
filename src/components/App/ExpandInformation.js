import React, { useState } from "react";
import automatic from "../../assets/Images/assessment/svg/carbon_automatic.svg";
import copyicon from "../../assets/Images/assessment/svg/copy-icon.svg";
import { Tabs, Tab, Button } from "react-bootstrap";
import IgnoreAlertsModals from "./../Comman/IgnoreAlertsModals";
import { useDispatch } from "react-redux";

const ExpandInformation = (props) => {
  const { alertId, alertListrule, alertIgnore, setCollapse } = props;
  const [isIgnoreModal, setIsIgnoreModal] = useState(false);
  const dispatch = useDispatch();
  const handleStepsModalClose = () => {
    setIsIgnoreModal(false);
  };

  const ignoreAlerts = () => {
    handleStepsModalClose();
    setCollapse(false);
    dispatch(alertIgnore([alertId]));
  };

  return (
    <div className="row px-4">
      <div className="col-md-6 left">
        <span className="top">
          <label>Recomendation</label>
          {alertListrule && alertListrule.recommendation}
        </span>

        <div className="form-group">
          <label>Remediation</label>
          <div className="col-12">
            <div className="row">
              <div className="col-5 p-0 text-right rightbutton ml-auto">
                <Button variant="primary">
                  Automated Fixing <img src={automatic} alt="automatic" />
                </Button>
              </div>
              <div className="col-12 p-0">
                <Tabs className="myClass border-0">
                  <Tab eventKey={1} title="Manual">
                    <ol className="pl-0 ml-3 mb-0">
                      <li>
                        Open the S3 console at{" "}
                        <a href="https://console.aws.amazon.com/s3">
                          https://console.aws.amazon.com/s3
                        </a>
                      </li>
                      <li>Select the Bucket</li>
                      <li>Click on Edit public access settings</li>
                      <li>
                        Ensure the block public access settings are set for the
                        bucket
                      </li>
                    </ol>
                  </Tab>
                  <Tab eventKey={2} title="CLI">
                    <div className="copyaria col-12">
                      <div className="row">
                        <div className="col-9">
                          aws s3api put-public-access-block --bucket
                          --public-access-block-configuration
                          "BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true"
                        </div>
                        <div className="col-3 text-right">
                          <label className="mb-0 mr-2">Copy</label>
                          <img src={copyicon} alt="copyicon" />
                        </div>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 pl-4">
        <div className="row">
          <div className="col-sm-9">
            <span className="additional">
              <label>Additional Information </label>
              {alertListrule && alertListrule.additionalInformation}
            </span>
          </div>
          <div className="col-sm-3 text-right ignore">
            <Button
              variant="danger"
              onClick={() => {
                setIsIgnoreModal(true);
              }}
            >
              Ignore -
            </Button>
          </div>
        </div>
        <div className="greenborder boder bg-white">
          <label className="badge badge-success">CIS</label>
          <span>
            {" "}
            Compliance benchmarks recommended by the Centre for Internet
            Security
          </span>
        </div>
      </div>
      {isIgnoreModal && (
        <IgnoreAlertsModals
          handleStepsModalClose={handleStepsModalClose}
          ignoreAlerts={ignoreAlerts}
          type="single"
        />
      )}
    </div>
  );
};

export default ExpandInformation;
