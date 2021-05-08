import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  GetAssessmentAlerts,
  assessmentAlertIgnore,
} from "../../../actions/AssessmentAlerts";
import AssessmentAlerts from "../../../components/App/AssessmentAlerts/index";
import { getAlertsRecommendation } from "../../../actions/AlertsList";
import { getFilterOptions } from "./../../../actions/FilterOption";
import { setFilter } from "./../../../util/common";

const Alerts = (props) => {
  const assessmentId = useParams();
  const dispatch = useDispatch();
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [sortType, setSortType] = useState("");
  const [sortColumn, setSortColumn] = useState("");
  const [collapseId, setCollapseId] = useState("");
  const [collapseKey, setCollapseKey] = useState("");
  const [collapse, setCollapse] = useState(false);
  const [ignorables, setIgnorables] = useState([]);
  const [loader, setLoader] = useState(false);
  const [filterOption, setfilterOption] = useState([
    {
      severity: "",
      serviceType: "",
      resourceType: "",
    },
  ]);
  const { loading } = useSelector(({ common }) => common);
  const { assessmentReportAlerts } = useSelector(
    ({ assessmentAlerts }) => assessmentAlerts
  );

  const { filteroption, alertlistrule } = useSelector(
    ({ alertlist }) => alertlist
  );

  useEffect(() => {
    if (loading) {
      if (collapse) {
        setLoader(false);
      } else {
        setLoader(true);
      }
    } else {
      setLoader(loading);
    }
  }, [loading, collapse]);
  useEffect(() => {
    const id = assessmentId.id;
    dispatch(
      GetAssessmentAlerts(
        { pageSize, pageNumber, sortType, id, sortColumn },
        filterOption
      )
    );
  }, [
    dispatch,
    filterOption,
    pageSize,
    pageNumber,
    sortType,
    assessmentId,
    sortColumn,
  ]);

  useEffect(() => {
    if (collapseId) {
      dispatch(getAlertsRecommendation(collapseId));
    }
  }, [dispatch, collapseId]);

  useEffect(() => {
    dispatch(getFilterOptions());
  }, [dispatch]);

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
  const onSortClick = (column) => {
    setCollapse(false);
    if (sortType === "asc" || !sortType) {
      setSortType("desc");
    } else {
      setSortType("asc");
    }
    setSortColumn(column);
  };

  const onCollapseClick = (key, id) => {
    setCollapseId(id);
    if (collapse) {
      if (key !== collapseKey) {
        setCollapseKey(key);
      } else {
        setCollapse(!collapse);
        setCollapseKey(null);
      }
    } else {
      setCollapseKey(key);
      setCollapse(!collapse);
    }
  };

  const onAlertsFilterChange = (filterColumn, value) => {
    setCollapse(false);
    let option = [...filterOption];
    option = setFilter(option, filterColumn, value);
    setfilterOption(option);
  };
  return (
    <AssessmentAlerts
      assessmentReportsAlerts={assessmentReportAlerts}
      alertListrule={alertlistrule}
      assesmentFiteroption={filteroption}
      onPageChange={onPageChange}
      onPageSizeChange={onPageSizeChange}
      onNextClick={onNextClick}
      onPreviousClick={onPreviousClick}
      onSortClick={onSortClick}
      sortType={sortType}
      sortColumn={sortColumn}
      collapseId={collapseId}
      collapseKey={collapseKey}
      onCollapseClick={onCollapseClick}
      collapse={collapse}
      onAlertsFilterChange={onAlertsFilterChange}
      ignorables={ignorables}
      setIgnorables={setIgnorables}
      assessmentAlertIgnore={assessmentAlertIgnore}
      setCollapse={setCollapse}
      loader={loader}
    />
  );
};
export default Alerts;
