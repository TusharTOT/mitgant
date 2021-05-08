import React from "react";
import Slack from "../../../assets/Images/Webapp/png/slack.png";
import Datadog from "../../../assets/Images/Webapp/png/datadog.png";
import Github from "../../../assets/Images/Webapp/png/github.png";
import Jenkins from "../../../assets/Images/Webapp/png/jenkins.png";
const IntegrationCards = () => {
  return (
    <div className="row integration-section">
      <div className="col-md-3 d-flex  ">
        <div className="integration-card active">
          <div className="mr-3">
            <img src={Slack} alt="slack" />{" "}
          </div>
          <div className="d-flex flex-column">
            <h6>Slack</h6>
            <p>
              Get your data security notifications directly to your Slack
              channel.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-3 d-flex">
        <div className="integration-card">
          <div class="mr-3">
            <img src={Datadog} alt="slack" />{" "}
          </div>
          <div className="d-flex flex-column">
            <h6>Datadog (Coming Soon)</h6>
            <p>
              Datadog is the essential monitoring platform for cloud
              applications.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-3 d-flex">
        <div className="integration-card ">
          <div class="mr-3">
            <img src={Github} alt="slack" />{" "}
          </div>
          <div className="d-flex flex-column">
            <h6>GitHub (Coming Soon)</h6>
            <p>
              Improve Quality & Security in your GitHub repositories with fast,
              accurate feedback
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-3 d-flex">
        <div className="integration-card ">
          <div class="mr-3">
            <img src={Jenkins} alt="slack" />{" "}
          </div>
          <div className="d-flex flex-column">
            <h6>Jenkins (Coming Soon)</h6>
            <p>
              Simple way to set up a continuous integration or continuous
              delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationCards;
