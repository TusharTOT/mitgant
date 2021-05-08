import React, { lazy, useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "react-bootstrap";
// import Tour from "reactour";
import rightarrow from "../../../assets/Images/Webapp/svg/right-arrow.svg";
import reporticon from "../../../assets/Images/Webapp/svg/report_icon.svg";
// import { tourConfig } from "../../../util/tourconfig";
import { getCloudStats } from "./../../../actions/dashboardActions";
import Loader from "../../../Loader/Loader";
const AssessmentReport = lazy(() =>
  import("../../../components/App/Dashboard/ChartSection/AssessmentReport")
);
const ResourceSummary = lazy(() =>
  import("../../../components/App/Dashboard/ResourceSummary")
);
const Summary = lazy(() =>
  import("../../../components/App/Dashboard/ChartSection/Summary")
);
const AddResourceModal = lazy(() =>
  import("../../../components/App/Dashboard/AddResourceModal")
);

const Dashboard = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(({ common }) => common);
  const userInfo = JSON.parse(localStorage.getItem("userData"));
  const [isTour, setIsTour] = useState(true);
  const [isResourceModal, setIsResourceModal] = useState(false);
  const { cloudStats } = useSelector(
    ({ dashboardReducer }) => dashboardReducer
  );
  useEffect(() => {
    dispatch(getCloudStats());
  }, [dispatch]);

  const series = [44, 55];
  const option = {
    colors: ["#F44336", "#E91E63"],
    labels: ["New Assessment", "New Assessment"],
    subtitle: {
      text: "+3%",
      align: "center",
      margin: 5,
      offsetX: 0,
      offsetY: 100,
      style: {
        fontSize: "30",
        fontWeight: "normal",
        color: "#9699a2",
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      markers: {
        radius: 2,
      },
    },
  };

  const gaugeSeries = [50];
  const gaugeOption = {
    colors: ["#DC0E00"],
    chart: {
      //   background: "#000",
      type: "radialBar",
      offsetY: -80,
      offsetX: -90,
      sparkline: {
        enabled: true,
      },
    },
    subtitle: {
      text: "7/10",
      align: "center",
      margin: 5,
      offsetX: 0,
      offsetY: 170,
      style: {
        fontSize: "42",
        fontWeight: "normal",
        color: "#D56906",
      },
    },

    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#F0F3F6",
          strokeWidth: "90%",
          margin: 25, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            color: "#999",
            opacity: 1,
            blur: 2,
          },
        },
      },
    },
    labels: [""],
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        shadeIntensity: 0.8,
        gradientToColors: ["#00E005"],
        inverseColors: false,
        opacityFrom: 0.8,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    stroke: {
      show: false,
      lineCap: "round",
    },
  };

  const piAlertOption = {
    colors: ["#E71D32", "#D56906", "#F9AB17", "#03A597"],
    labels: ["Critical", "High", "Medium:", "Low:"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      markers: {
        radius: 2,
      },
    },
  };

  const piAlertSeries = [34, 54, 24, 63];

  const awsChartSeries = [34, 34, 34, 23, 23, 23, 21, 21, 21, 97, 97, 97, 97];

  const awsChartOption = {
    colors: [
      "#EFCEF3",
      "#EFCEF3",
      "#5A3EC8",
      "#112C1B",
      "#48D4BB",
      "#EFCEF3",
      "#EFCEF3",
      "#5A3EC8",
      "#112C1B",
      "#48D4BB",
      "#5A3EC8",
      "#112C1B",
      "#48D4BB",
    ],
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      markers: {
        radius: 2,
      },
    },
  };

  const addResource = () => {
    setIsResourceModal(true);
  };

  const handleResourceModalClose = () => {
    setIsResourceModal(false);
  };
  const closeTour = () => {
    setIsTour(false);
  };

  // const triggerAssessment = useCallback(async () => {
  //   const page = { size: 20, number: 0 };
  //   statusHandler((prev) => ({
  //     ...prev,
  //     bool: true,
  //     message:
  //       'The assessment of your AWS Account has started, it will take few minutes to complete, you will be notified when the Assessment Report is ready.',
  //   }));

  //   await dispatch(getNewAssessment(page));
  // }, [dispatch, statusHandler]);

  return (
    <>
      <div className="dashboard-main">
        <div className="card-header bg-transparent border-0 d-flex flex-wrap align-items-end justify-content-between p-0 pl-md-4">
          <div className="left" data-tut="view-report">
            <h2>Good morning, {userInfo && userInfo.firstName}!</h2>
            <div className="d-flex flex-wrap align-items-center">
              <h6 className="mb-0">
                Here your overview from last assessment: <b>Jan 06 2021</b>
              </h6>{" "}
              <a href="#" className="report mb-0">
                <img src={reporticon} className="mr-2" alt="report" /> View
                report{" "}
                <img className="ml-2" src={rightarrow} alt="rightarrow" />{" "}
              </a>
            </div>
          </div>
          <div className="linkdiv" data-tut="reactour__iso">
            <button
              type="button"
              // onClick={triggerAssessment}
              href="#"
              className="btn btn-common">
              Start Assessment +
            </button>
          </div>
        </div>
        <div className="chart-card-section">
          <Row>
            <AssessmentReport
              gaugeOption={gaugeOption}
              gaugeSeries={gaugeSeries}
              option={option}
              series={series}
            />
            <Summary
              piAlertOption={piAlertOption}
              piAlertSeries={piAlertSeries}
              awsChartOption={awsChartOption}
              awsChartSeries={awsChartSeries}
            />
          </Row>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <ResourceSummary addResource={addResource} cloudStats={cloudStats} />
        )}
      </div>
      {/* <Tour
        onRequestClose={() => closeTour()}
        steps={tourConfig}
        isOpen={isTour}
        accentColor={"#3D70B2"}
        lastStepNextButton={<button className="btn-common">Done</button>}
        showNavigation={false}
        showNumber={false}
        prevButton={<button className="btn-common">back</button>}
        nextButton={<button className="btn-common">Next</button>}
        className="tour-content-popup"
        showButtons={false}
      /> */}
      {isResourceModal && (
        <AddResourceModal handleResourceModalClose={handleResourceModalClose} />
      )}
    </>
  );
};

export default Dashboard;
