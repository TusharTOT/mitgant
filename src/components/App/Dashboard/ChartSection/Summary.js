import React from 'react';
import { Row, Col } from "react-bootstrap";
import ReactApexChart from "react-apexcharts";
import infoIcon from "../../../../assets/Images/Webapp/svg/info-icon.svg";

const Summary = (props) => {
    const { piAlertOption, piAlertSeries, awsChartOption, awsChartSeries } = props;
    return (
        <Col md={9} className="pl-2">
            <div className="card chart-layouts h-100">
                <div className="card-body">
                    <div className="card-header bg-transparent pt-0 px-0">
                        <h4>Alert Summary</h4>
                    </div>
                    <Row>
                        <Col md={6}>
                            <div className="alertchart left">
                                <h4>
                                    Alert by Severity{" "}
                                    <img className="ml-2" src={infoIcon} alt="info" />
                                </h4>

                                <div className="row">
                                    <div className="col-sm-7">
                                        <div className="right-donut-chart">
                                            <ReactApexChart
                                                options={piAlertOption}
                                                series={piAlertSeries}
                                                type="donut"
                                                width={340}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-5">
                                        <div className="righttext">
                                            <h5>Critical Alert</h5>
                                            <b>+ 17%</b>
                                            <p>vs last assessment</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="alertchart">
                                <h4>
                                    Alert by AWS Service{" "}
                                    <img className="ml-2" src={infoIcon} alt="info" />
                                </h4>
                                <div className="row">
                                    <div className="col-sm-8">
                                        <ReactApexChart
                                            options={awsChartOption}
                                            series={awsChartSeries}
                                            type="donut"
                                            width={380}
                                        />
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="righttext">
                                            <h5>Lambda</h5>
                                            <b>+ 7%</b>
                                            <p>vs last assessment</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Col>
    );
};

export default Summary;