import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import BreadCrumb from "../../Comman/BreadCrumb";
import FilterComponent from "../AlertsList/FilterComponent";
import TableHeader from "./../AlertsList/TableHeader";
import TableBody from "./../AlertsList/TableBody";
import TableFooter from "./../TableFooter";
import { useDispatch } from "react-redux";
import IgnoreAlertsModals from "./../../Comman/IgnoreAlertsModals";
import Loader from "../../../Loader/Loader";
import { useSelector } from "react-redux";

function AssessmentAlerts(props) {
  const {
    assessmentReportsAlerts,
    alertListrule,
    assesmentFiteroption,
    onPageChange,
    onPageSizeChange,
    onNextClick,
    onPreviousClick,
    onSortClick,
    sortType,
    sortColumn,
    collapseId,
    collapseKey,
    onCollapseClick,
    collapse,
    onAlertsFilterChange,
    ignorables,
    setIgnorables,
    assessmentAlertIgnore,
    setCollapse,
    loader,
  } = props;

  const [isIgnoreModal, setIsIgnoreModal] = useState(false);
  const dispatch = useDispatch();
  const { loading } = useSelector(({ common }) => common);
  const setModal = () => {
    setIsIgnoreModal(!isIgnoreModal);
  };

  const ignoreAlerts = () => {
    setModal();
    setCollapse(false);
    dispatch(assessmentAlertIgnore(ignorables));
    setIgnorables([]);
  };

  return (
    <React.Fragment>
      <div className="assessmentmain">
        <div className="card-header bg-transparent border-0 d-flex align-items-center justify-content-between pr-0 pt-0">
          <BreadCrumb className="" {...props} />
          <Button variant="primary">Start Assessment +</Button>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="align-items-center d-flex flex-wrap justify-content-between topheading mb-3">
              <h4>
                Report - 04 February 2021 4:05 PM | Total Alerts:{" "}
                {assessmentReportsAlerts.totalElements}
              </h4>
              <div className="selectdiv v d-flex align-items-center">
                <FilterComponent
                  filteroption={assesmentFiteroption}
                  onAlertsFilterChange={onAlertsFilterChange}
                />
              </div>
            </div>
            <Table className="border report" hover responsive="xl">
              <TableHeader
                onSortClick={onSortClick}
                sortType={sortType}
                sortColumn={sortColumn}
                setIgnorables={setIgnorables}
                alertList={assessmentReportsAlerts}
                ignorables={ignorables}
                setModal={setModal}
              />
              {loader ? (
                <Loader isTable={true} />
              ) : (
                <TableBody
                  alertList={assessmentReportsAlerts}
                  alertListrule={alertListrule}
                  onCollapseClick={onCollapseClick}
                  collapseKey={collapseKey}
                  collapse={collapse}
                  collapseId={collapseId}
                  ignorables={ignorables}
                  setIgnorables={setIgnorables}
                  alertIgnore={assessmentAlertIgnore}
                  setCollapse={setCollapse}
                />
              )}
              <TableFooter
                onPageSizeChange={onPageSizeChange}
                list={assessmentReportsAlerts}
                onPreviousClick={onPreviousClick}
                onPageChange={onPageChange}
                onNextClick={onNextClick}
              />
            </Table>
          </div>
        </div>
      </div>
      {isIgnoreModal ? (
        <IgnoreAlertsModals
          handleStepsModalClose={setModal}
          ignoreAlerts={ignoreAlerts}
          type="multiple"
          ignorables={ignorables}
        />
      ) : (
        ""
      )}
    </React.Fragment>
  );
}

export default AssessmentAlerts;
