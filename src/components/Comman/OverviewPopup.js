import React from "react";

function OverviewPopup(props) {
  const { overviewType } = props;
  return (
    <div style={{ display: "flex", textAlign: "start" , padding:"5px" }}>
      {overviewType === "critical" && (
        <p>
          <p> Critical Alerts</p> Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. At sit egestas consectetur tempus vitae aenean vel.
          Nulla egestas ullamcorper erat eget ipsum mi erat fusce rhoncus.
        </p>
      )}
      {overviewType === "high" && (
        <p>
          <p> High Alerts</p> Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. At sit egestas consectetur tempus vitae aenean vel. Nulla
          egestas ullamcorper erat eget ipsum mi erat fusce rhoncus.
        </p>
      )}
      {overviewType === "medium" && (
        <p>
          <p> Medium Alerts</p> Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. At sit egestas consectetur tempus vitae aenean vel.
          Nulla egestas ullamcorper erat eget ipsum mi erat fusce rhoncus.
        </p>
      )}
      {overviewType === "low" && (
        <p>
          <p> low Alerts</p> Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. At sit egestas consectetur tempus vitae aenean vel. Nulla
          egestas ullamcorper erat eget ipsum mi erat fusce rhoncus.
        </p>
      )}
    </div>
  );
}

export default OverviewPopup;

<p>Critical Alerts</p>;
