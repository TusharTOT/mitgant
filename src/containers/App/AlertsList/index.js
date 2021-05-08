import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAlertsList,
  getAlertsRecommendation,
  alertIgnore,
} from "./../../../actions/AlertsList";
import { getFilterOptions } from "./../../../actions/FilterOption";
import ListComponent from "./../../../components/App/AlertsList/ListComponent";
import { setFilter } from "./../../../util/common";
import { getExpectedStats } from "./../../../actions/dashboardActions";

const AlertsList = () => {
  const dispatch = useDispatch();
  const { alertslist, alertlistrule, filteroption } = useSelector(
    ({ alertlist }) => alertlist
  );
  const { loading } = useSelector(({ common }) => common);
  const { stats } = useSelector(({ dashboardReducer }) => dashboardReducer);
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [sortType, setSortType] = useState("");
  const [sortColumn, setSortColumn] = useState("");
  const [ignorables, setIgnorables] = useState([]);
  const [collapseId, setCollapseId] = useState("");
  const [collapseKey, setCollapseKey] = useState("");
  const [collapse, setCollapse] = useState(false);
  const [loader, setLoader] = useState(false);
  const [filterOption, setfilterOption] = useState([
    {
      severity: "",
      serviceType: "",
      resourceType: "",
    },
  ]);

  useEffect(() => {
    dispatch(getExpectedStats());
  }, [dispatch]);
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
    dispatch(
      getAlertsList(
        { pageSize, pageNumber, sortType, sortColumn },
        filterOption
      )
    );
  }, [dispatch, filterOption, sortColumn, sortType, pageSize, pageNumber]);

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

  const getPercentage = (value) => {
    let percentage = [];
    // var total = 0;
    const Localstats = stats ? stats.alertStatistic : [];
    const getPercentage = (value, total) => {
      const data = 100 * value;
      return data / total;
    };

    if (Localstats) {
      const total =
        Localstats.severityStatistic.noofhigh +
        Localstats.severityStatistic.noofcritical +
        Localstats.severityStatistic.nofmedium +
        Localstats.severityStatistic.nooflow;

      const high = getPercentage(Localstats.severityStatistic.noofhigh, total);
      const critical = getPercentage(
        Localstats.severityStatistic.noofcritical,
        total
      );
      const medium = getPercentage(
        Localstats.severityStatistic.nofmedium,
        total
      );

      percentage = [
        { high: high, medium: medium, critical: critical },
        {
          high: Localstats.severityStatistic.noofhigh,
          medium: Localstats.severityStatistic.nofmedium,
          critical: Localstats.severityStatistic.noofcritical,
          low: Localstats.severityStatistic.nooflow,
        },
        {
          total: total,
        },
      ];
    }
    return percentage;
  };

  const statsData = getPercentage(stats);
  return (
    <div>
      <ListComponent
        alertList={alertslist}
        alertListrule={alertlistrule}
        filteroption={filteroption}
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
        alertIgnore={alertIgnore}
        setCollapse={setCollapse}
        stats={stats && stats}
        overview={getPercentage(stats)}
        loader={loader}
      />
    </div>
  );
};

export default AlertsList;
