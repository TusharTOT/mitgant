import React from 'react';
import { Col } from "react-bootstrap";
import ReactApexChart from "react-apexcharts";
import infoIcon from "../../../../assets/Images/Webapp/svg/info-icon.svg";

const AssessmentReport = (props) => {

    const { gaugeOption, gaugeSeries, option, series } = props;

    return (
        <Col className="pr-md-0" md={3}>
            <div className="left-chart card chart-layouts">
                <div className="card-body">
                    <div className="card-header bg-transparent pt-0 px-0 mb-0">
                        {" "}
                        <h4 className="d-flex align-items-center justify-content-between">
                            Secure Score
                    <img src={infoIcon} alt="info" />
                        </h4>
                    </div>

                    <div id="chart" className="gauge-chart">
                        <ReactApexChart
                            options={gaugeOption}
                            series={gaugeSeries}
                            type="radialBar"
                            width={450}
                        />
                        <div classname="gauge-chart-contnet">Severity level<span>High</span></div>
                    </div>
                    <div className="gauge-chart-details">
                        <h4 className="mb-0">
                            Total <b>165</b> Alerts{" "}
                            <img className="ml-2" src={infoIcon} alt="info" />
                        </h4>
                        <div className="donut-chart">
                            <ReactApexChart
                                options={option}
                                series={series}
                                type="donut"
                                width={320}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default AssessmentReport;