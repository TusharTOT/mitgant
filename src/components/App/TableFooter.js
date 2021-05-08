import React from "react";
import { Form, Pagination } from "react-bootstrap";
import { showitems } from "../../util/common";

const TableFooter = (props) => {
  const {
    onPageSizeChange,
    list,
    onPreviousClick,
    onPageChange,
    onNextClick,
  } = props;
  return (
    <tfoot>
      <tr>
        <td colSpan="4">
          Items per page:{" "}
          <Form.Control
            className="d-inline-block w-auto border-0 shadow-none"
            as="select"
            onChange={(e) => {
              onPageSizeChange(e.target.value);
            }}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </Form.Control>{" "}
          | {"  "}
          {list.content &&
            showitems(
              list.number + 1,
              list.size,
              list.last,
              list.totalElements
            )}
          {list.content
            ? " " + "of" + " " + list.totalElements + " items"
            : "0-0 of 0 items"}
        </td>
        <td colSpan="4" align="right">
          <span className="rightnav">
            <label>
              {list.content
                ? list.number + 1 + "" + "of " + list.totalPages + " pages"
                : "0-0 of 0 pages"}
            </label>
            <Pagination>
              {list && (
                <>
                  <Pagination.Prev
                    disabled={list.first}
                    onClick={() => {
                      onPreviousClick(list.number + 1);
                    }}
                  />
                  <Form.Control
                    className="d-inline-block w-auto border-0 shadow-none"
                    as="select"
                    onChange={(e) => onPageChange(e.target.value)}
                    value={list.number + 1}
                  >
                    {list.totalPages &&
                      [...Array(list.totalPages)].map((el, index) => (
                        <option vlaue={index + 1}>{index + 1}</option>
                      ))}
                  </Form.Control>
                  <Pagination.Next
                    disabled={list.last}
                    onClick={() => {
                      onNextClick(list.number + 1);
                    }}
                  />
                </>
              )}
            </Pagination>
          </span>
        </td>
      </tr>{" "}
    </tfoot>
  );
};

export default TableFooter;
