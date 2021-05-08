import React from "react";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import MainHeader from '../MainHeader';
import TableBody from './TableBody'
import TableHeader from './TableHeader';
import TableFooter from './../TableFooter';
import Loader from "../../../Loader/Loader";

function AssessmentReport(props) {
  const {
    assessmentReports,
    onPageChange,
    onPageSizeChange,
    onNextClick,
    onPreviousClick,
    onViewAlertsClick,
    onSortClick,
    sortType,
  } = props;
  const { loading } = useSelector(({ common }) => common);
  return (
    <React.Fragment>
      <div className="assessmentmain">
        <div className="card-header bg-transparent border-0 d-flex align-items-center justify-content-between pr-0 pt-0">
          <h3>Assessment Report</h3>
          <Button variant="primary">Start Assessment +</Button>
        </div>
        <div className="card">
          <div className="card-body">
            <MainHeader totalListing={assessmentReports.totalElements} />
            <Table className="border" hover responsive="xl">
              <TableHeader onSortClick={onSortClick} sortType={sortType} />
              {loading ? (
                <Loader isTable={true} />
              ) : (
                <TableBody
                  assessmentReports={assessmentReports}
                  onViewAlertsClick={onViewAlertsClick}
                />
              )}
              <TableFooter
                onPageSizeChange={onPageSizeChange}
                list={assessmentReports}
                onPreviousClick={onPreviousClick}
                onPageChange={onPageChange}
                onNextClick={onNextClick}
              />
            </Table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AssessmentReport;
