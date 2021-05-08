import React, { lazy, useState } from "react";
import { Table, Button } from "react-bootstrap";
import IgnoreAlertsModals from "./../../Comman/IgnoreAlertsModals";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../Loader/Loader";

const TableHeader = lazy(() => import("./TableHeader"));
const TableBody = lazy(() => import("./TableBody"));
const TableFooter = lazy(() => import("../TableFooter"));
const Overview = lazy(() => import("./Overview"));
const FilterComponent = lazy(() => import("./FilterComponent"));

const ListComponent = (props) => {
  const {
    alertList,
    alertListrule,
    filteroption,
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
    alertIgnore,
    setCollapse,
    stats,
    overview,
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
    dispatch(alertIgnore(ignorables));
    setIgnorables([]);
  };

  return (
    <React.Fragment>
      <div className="assessmentmain">
        <div className="card-header bg-transparent border-0 d-flex align-items-center justify-content-between pr-0 pt-0">
          <h3>Alerts</h3>
          <Button variant="primary">Start Assessment +</Button>
        </div>
        <Overview stats={stats && stats} overview={overview} />
        <div className="card">
          <div className="card-body">
            <div className="align-items-center d-flex flex-wrap justify-content-between topheading mb-3">
              <h4>Alerts | Total: {alertList.totalElements}</h4>
              <div className="selectdiv v d-flex align-items-center">
                <FilterComponent
                  filteroption={filteroption}
                  onAlertsFilterChange={onAlertsFilterChange}
                />
              </div>
            </div>
            <Table className="border report" hover responsive="md">
              <TableHeader
                onSortClick={onSortClick}
                sortType={sortType}
                sortColumn={sortColumn}
                setIgnorables={setIgnorables}
                alertList={alertList}
                ignorables={ignorables}
                setModal={setModal}
              />
              {loader ? (
                <Loader isTable={true} />
              ) : (
                <TableBody
                  alertList={alertList}
                  alertListrule={alertListrule}
                  onCollapseClick={onCollapseClick}
                  collapseKey={collapseKey}
                  collapse={collapse}
                  collapseId={collapseId}
                  ignorables={ignorables}
                  setIgnorables={setIgnorables}
                  alertIgnore={alertIgnore}
                  setCollapse={setCollapse}
                />
              )}

              <TableFooter
                onPageSizeChange={onPageSizeChange}
                list={alertList}
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
};

export default ListComponent;
