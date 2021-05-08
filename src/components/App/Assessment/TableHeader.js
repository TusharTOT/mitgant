import React from "react";
import sortdown from "../../../assets/Images/assessment/svg/sortdown.svg";
import sortup from "../../../assets/Images/assessment/svg/sortup.svg";

const TableHeader = (props) => {
  const { sortType, onSortClick } = props;
  return (
    <thead>
      <tr>
        <th>Assessment</th>
        <th>
          Time of Assessed&nbsp;
          {sortType && sortType === "asc" ? (
            <img
              src={sortup}
              onClick={() => {
                onSortClick("desc");
              }}
            ></img>
          ) : (
            <img
              src={sortdown}
              onClick={() => {
                onSortClick("asc");
              }}
            ></img>
          )}
        </th>
        <th>Total</th>
        <th></th>
        <th className="last-border"></th>
      </tr>
    </thead>
  );
};

export default TableHeader;
