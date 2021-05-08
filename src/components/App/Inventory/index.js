import React from "react";

const InventoryList = ({ component: Component, title, tabId, selectedTab }) => {
  return <Component category={tabId} title={title} selectedTab={selectedTab} />;
};

export default InventoryList;
