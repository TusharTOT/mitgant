import React, { useState } from "react";
import sortdown from "../../../assets/Images/assessment/svg/sortdown.svg";
import sortup from "../../../assets/Images/assessment/svg/sortup.svg";
import { Form, Button } from "react-bootstrap";

const TableHeader = (props) => {
  const {
    onSortClick,
    sortType,
    sortColumn,
    setIgnorables,
    alertList,
    ignorables,
    setModal,
  } = props;
  const [ischecked, setChecked] = useState(false);

  const selectAll = () => {
    setChecked(!ischecked);
    if (!ischecked) {
      const alertIds = alertList.content.map((alertItem) => alertItem.id);
      setIgnorables(alertIds);
    }

    if (ischecked) {
      setIgnorables([]);
    }
  };

  return (
    <thead>
      <tr>
        <th></th>
        <th
          className="pointer"
          onClick={() => {
            onSortClick("AWSServiceType");
          }}
        >
          AWS Service &nbsp;
          {sortColumn === "AWSServiceType" || !sortColumn ? (
            sortType && sortType === "asc" ? (
              <img src={sortup} alt="arrow-up" />
            ) : (
              <img src={sortdown} alt="arrow-down" />
            )
          ) : (
            <img src={sortdown} alt="arrow-down" />
          )}
        </th>
        <th
          className="pointer"
          onClick={() => {
            onSortClick("resourceName");
          }}
        >
          Resource Name&nbsp;
          {sortColumn === "resourceName" || !sortColumn ? (
            sortType && sortType === "asc" ? (
              <img src={sortup} alt="arrow-up" />
            ) : (
              <img src={sortdown} alt="arrow-down" />
            )
          ) : (
            <img src={sortdown} alt="arrow-down" />
          )}
        </th>
        <th
          className="pointer"
          onClick={() => {
            onSortClick("resourceType");
          }}
        >
          Resource Type&nbsp;
          {sortColumn === "resourceType" || !sortColumn ? (
            sortType && sortType === "asc" ? (
              <img src={sortup} alt="arrow-up" />
            ) : (
              <img src={sortdown} alt="arrow-down" />
            )
          ) : (
            <img src={sortdown} alt="arrow-down" />
          )}
        </th>
        <th
          className="pointer"
          onClick={() => {
            onSortClick("ruleId");
          }}
        >
          Rule ID&nbsp;
          {sortColumn === "ruleId" || !sortColumn ? (
            sortType && sortType === "asc" ? (
              <img src={sortup} alt="arrow-up" />
            ) : (
              <img src={sortdown} alt="arrow-down" />
            )
          ) : (
            <img src={sortdown} alt="arrow-down" />
          )}
        </th>
        <th
          className="pointer"
          onClick={() => {
            onSortClick("severity");
          }}
        >
          Severity&nbsp;
          {sortColumn === "severity" || !sortColumn ? (
            sortType && sortType === "asc" ? (
              <img src={sortup} alt="arrow-up" />
            ) : (
              <img src={sortdown} alt="arrow-down" />
            )
          ) : (
            <img src={sortdown} alt="arrow-down" />
          )}
        </th>
        <th
          className="pointer"
          onClick={() => {
            onSortClick("description");
          }}
        >
          Description&nbsp;
          {sortColumn === "description" || !sortColumn ? (
            sortType && sortType === "asc" ? (
              <img src={sortup} alt="arrow-up" />
            ) : (
              <img src={sortdown} alt="arrow-down" />
            )
          ) : (
            <img src={sortdown} alt="arrow-down" />
          )}
        </th>
        <th className="text-right alert-box-td" colSpan="2">
          {ignorables && ignorables.length > 0 ? (
            <div className="text-right" style={{display:"inline-block"}}>
              {ignorables.length} Alerts are selected
              <Button variant="danger" onClick={setModal}>
                Ignore -
              </Button>
            </div>
          ) : (
            ""
          )}
          <Form.Check
            custom
            style={{display:"inline-block"}}
            type={"checkbox"}
            id="all"
            checked={ischecked}
            onChange={() => selectAll()}
          />
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
