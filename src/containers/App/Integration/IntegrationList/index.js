import { React, useEffect, useState } from "react";
import IntegrationListTable from "../../../../components/App/Integration/IntegrationList/IntegrationList";
const IntegrationList = () => {
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [sortType, setSortType] = useState("");

  // useEffect(() => {
  //   // dispatch(GetAssessmentReport({ pageSize, pageNumber, sortType }));
  // }, [dispatch, pageSize, pageNumber, sortType]);

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

  const onSortClick = (type) => {
    setSortType(type);
  };
  return (
    <IntegrationListTable
      onPageChange={onPageChange}
      onPageSizeChange={onPageSizeChange}
      onNextClick={onNextClick}
      onPreviousClick={onPreviousClick}
      onSortClick={onSortClick}
    />
  );
};

export default IntegrationList;
