import React from "react";
import { useSelector } from "react-redux";
import Loader from "../../../Loader/Loader";

const renderContent = (content) => content.map((item) => item);

const TableComponent = (props) => {
  const { loading } = useSelector(({ common }) => common);
  const { columns, dataSource } = props;
  const content =
    dataSource && dataSource.length > 0 ? (
      renderContent(dataSource)
    ) : (
      <tr>
        <td colSpan={columns.length}>No Content</td>
      </tr>
    );

  return (
    <React.Fragment>
      <thead>
        <tr>
          {columns.map((item, index) => {
            const header = item.header ? item.header : item;

            return (
              <th className="pointer" scope="col" key={index}>
                {header}{" "}
                {/* {
                                    item.sortable && (
                                        (sortColumn === item.value || !sortColumn) ?
                                            sortType && sortType === "asc" ? (
                                                <img src={sortup} alt="arrow-up" />
                                            ) : (
                                                <img src={sortdown} alt="arrow-down" />
                                            )
                                            : <img src={sortdown} alt="arrow-down" />
                                    )
                                } */}
              </th>
            );
          })}
        </tr>
      </thead>
      {loading ? <Loader isTable={true} /> : <tbody>{content}</tbody>}
    </React.Fragment>
  );
};

export default TableComponent;
