import React, { useState } from "react";
import { useSelector } from "react-redux";
import infoIcon from "../../../assets/Images/Webapp/svg/info-icon.svg";
import alearticon from "../../../assets/Images/alertlist/alearticon.svg";
import blackarrow from "../../../assets/Images/alertlist/black-arrow.svg";
import OverviewPopup from "../../Comman/OverviewPopup";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
const Overview = (props) => {
  const stats = props.stats ? props.stats.alertStatistic : [];
  const { loading } = useSelector(({ common }) => common);
  const overview = props.overview;
  return (
    <div className="card overviewpart mb-2">
      <div className="card-body">
        <div className="card-header bg-transparent pt-0 px-0 border-0 mb-4">
          <h4>Overview</h4>
        </div>
        <div className="row">
          <div className="col-md-4 col-xl-3">
            <div className="cartdiv d-flex align-items-center justify-content-center mx-auto">
              <span className="alearticon">
                <img src={alearticon} alt="alert" />
              </span>
              <div className="innercircle">
                <h6>Total</h6>
                <div className="count">
                  {overview.length && overview[2].total}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 mt-4 mt-md-0 col-xl-9">
            <div className="row">
              <div className="col-6 col-sm-6 col-md-3 boxlist mb-3 mb-md-0">
                <div className="d-flex align-items-center">
                  <span className="red"></span>
                  <h3 className="mb-0 pl-2 pr-3">Critical</h3>{" "}
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip>
                        <OverviewPopup overviewType="critical" />
                      </Tooltip>
                    }
                  >
                    <img src={infoIcon} alt="infoIcon" />
                  </OverlayTrigger>
                </div>
                <h2>
                  {overview.length ? overview[1].critical : ""}{" "}
                  <img src={blackarrow} alt="rightarrow" />
                </h2>
              </div>
              <div className="col-6 col-sm-6 col-md-3 boxlist mb-3 mb-md-0">
                <div className="d-flex align-items-center">
                  <span className="orange"></span>
                  <h3 className="mb-0 pl-2 pr-3">High</h3>
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip>
                        <OverviewPopup overviewType="high" />
                      </Tooltip>
                    }
                  >
                    <img src={infoIcon} alt="infoIcon" />
                  </OverlayTrigger>
                </div>
                <h2>
                  {overview.length ? overview[1].high : ""}{" "}
                  <img src={blackarrow} alt="rightarrow" />
                </h2>
              </div>
              <div className="col-6 col-sm-6 col-md-3 boxlist mb-3 mb-md-0">
                <div className="d-flex align-items-center">
                  <span className="warning"></span>
                  <h3 className="mb-0 pl-2 pr-3">Medium</h3>
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip>
                        <OverviewPopup overviewType="medium" />
                      </Tooltip>
                    }
                  >
                    <img src={infoIcon} alt="infoIcon" />
                  </OverlayTrigger>
                </div>
                <h2>
                  {overview.length ? overview[1].medium : ""}{" "}
                  <img src={blackarrow} alt="rightarrow" />
                </h2>
              </div>
              <div className="col-6 col-sm-6 col-md-3 boxlist mb-3 mb-md-0">
                <div className="d-flex align-items-center">
                  <span className="success"></span>
                  <h3 className="mb-0 pl-2 pr-3">Low</h3>
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip>
                        <OverviewPopup overviewType="low" />
                      </Tooltip>
                    }
                  >
                    <img src={infoIcon} alt="infoIcon" />
                  </OverlayTrigger>
                </div>
                <h2>
                  {overview.length ? overview[1].low : ""}{" "}
                  <img src={blackarrow} alt="rightarrow" />
                </h2>
              </div>
            </div>
            <div className="col-12 pl-0 pr-sm-4 mt-4 pt-2 ">
              <div className="progressdiv d-flex">
                {overview.length ? (
                  <>
                    {" "}
                    <div
                      className="red"
                      style={{ minWidth: `${overview[0].critical}%` }}
                      id="redpro"
                    ></div>
                    <div
                      className="orange"
                      style={{ minWidth: `${overview[0].high}%` }}
                      id="orangepro"
                    ></div>
                    <div
                      className="yellow"
                      style={{ minWidth: `${overview[0].medium}%` }}
                      id="yellowpro"
                    ></div>{" "}
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
