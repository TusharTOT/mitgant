import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAssessmentReport } from "./../../../actions/Assessment";
import AssessmentReport from "../../../components/App/Assessment/index";
const Assessment = (props) => {
  const dispatch = useDispatch();
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [sortType, setSortType] = useState("");
  const { assessmentReport } = useSelector(({ assessment }) => assessment);
  useEffect(() => {
    dispatch(GetAssessmentReport({ pageSize, pageNumber, sortType }));
  }, [dispatch, pageSize, pageNumber, sortType]);

  const onPageChange = (pagenumber) => {
    setPageNumber(pagenumber);
  };

  const onPageSizeChange = (pagesize) => {
    setPageSize(pagesize);
  };
  const onNextClick = (pagenumber) => {
    setPageNumber(pagenumber + 1);
  };
  const onPreviousClick = (pagenumber) => {
    setPageNumber(pagenumber - 1);
  };
  const onViewAlertsClick = (assessmentId) => {
    props.history.push(`./assessment/alerts/${assessmentId}`);
  };
  const onSortClick = (type) => {
    setSortType(type);
  };
  return (
    <AssessmentReport
      assessmentReports={assessmentReport}
      onPageChange={onPageChange}
      onPageSizeChange={onPageSizeChange}
      onNextClick={onNextClick}
      onPreviousClick={onPreviousClick}
      onViewAlertsClick={onViewAlertsClick}
      onSortClick={onSortClick}
      sortType={sortType}
    />
  );
};
export default Assessment;
