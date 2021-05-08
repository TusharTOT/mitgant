import React, { lazy } from "react";
import { useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import downarrow from "../../../assets/Images/assessment/svg/table-arrow.svg";
import ExpandInformation from "./../ExpandInformation";
import NoAlerts from "./NoAlerts";
import Loader from "../../../Loader/Loader";

const TableBody = (props) => {
  const { loading } = useSelector(({ common }) => common);
  const { noData } = useSelector(({ common }) => common);

  const {
    alertList,
    onCollapseClick,
    collapseKey,
    collapse,
    alertListrule,
    ignorables,
    setIgnorables,
    alertIgnore,
    setCollapse,
  } = props;
  const handleIgnoreables = (itemId) => {
    const isChecked = ignorables.includes(itemId);
    const newChecked = isChecked
      ? ignorables.filter((id) => id !== itemId)
      : ignorables.concat(itemId);
    setIgnorables(newChecked);
  };
  return (
    <tbody>

      {/* {!loading && !noData ? <div>vfvf</div> : "nodata"} */}
      {!loading && noData ? (
        <NoAlerts />
      ) : (
        alertList.content &&
        alertList.content.map((alerts, key) => (
          <>
            <tr
              className={`arrowaccordian  ${
                collapseKey === key && collapse ? "active" : ""
              }`}
            >
              <td>
                <span
                  id="downarrow"
                  className={`arrowaccordian  ${
                    collapseKey === key && collapse ? "active" : ""
                  }`}
                  onClick={() => onCollapseClick(key, alerts.ruleId)}
                >
                  <img src={downarrow} alt="arrow" />
                </span>
              </td>
              <td>{alerts.awsserviceType}</td>
              <td>{alerts.resourceName}</td>
              <td>{alerts.resourceType}</td>
              <td>{alerts.ruleId}</td>
              <td
                className={`${
                  (alerts.severity === "LOW" && "text-success") ||
                  (alerts.severity === "MEDIUM" && "text-warning") ||
                  (alerts.severity === "CRITICAL" && "text-danger")
                }`}
              >
                {alerts.severity}
              </td>
              <td>{alerts.description}</td>
              <td align="right">
                <Form.Check
                  custom
                  type={"checkbox"}
                  id={alerts.id}
                  checked={ignorables.includes(alerts.id)}
                  onChange={() => handleIgnoreables(alerts.id)}
                />
              </td>
            </tr>
            <tr className="slidedown">
              <td colSpan="8" className="p-0">
                <div
                  className={`innerbox p-3 ${
                    collapseKey === key ? collapse && "open" : "d-none"
                  }`}
                  id="hidelist"
                >
                  {" "}
                  {collapseKey === key
                    ? collapse && loading ? <Loader/> : (
                        <ExpandInformation
                          alertId={alerts.id}
                          alertListrule={alertListrule}
                          alertIgnore={alertIgnore}
                          setCollapse={setCollapse}
                        />
                      )
                    : "d-none"}
                </div>
              </td>
            </tr>
          </>
        ))
      )}
    </tbody>
  );
};

export default TableBody;
