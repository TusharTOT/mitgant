import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import MainHeader from "../../MainHeader";
import TableBody from "../../Assessment/TableBody";
import TableHeader from "../../Assessment/TableHeader";
import TableFooter from "../../TableFooter";
import search from "../../../../assets/Images/Webapp/png/search.png";
import { Form, Pagination } from "react-bootstrap";
import Toggle from "react-toggle";
const IntegrationList = (props) => {
  const {
    onPageChange,
    onPageSizeChange,
    onNextClick,
    onPreviousClick,
    onSortClick,
  } = props;
  return (
    <React.Fragment>
      <div className="assessmentmain">
        <div className="card">
          <div className="card-body">
            <div className="align-items-center d-flex flex-wrap justify-content-between topheading mb-3">
              <h4>Integrations List </h4>
              <div className="calendardiv d-flex align-items-center search-box">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search name"
                />
                <span>
                  <img src={search} alt="search" />
                </span>
              </div>
            </div>
            {/* <MainHeader totalListing={assessmentReports.totalElements} /> */}
            <Table className="border" hover responsive="xl">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Name</th>
                  <th>Last Sent</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th className="border-right"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Slack</td>
                  <td>Name 1</td>
                  <td>15 Feb 2021, 12PM</td>
                  <td>Not Provided</td>
                  <td>
                    {" "}
                    <Toggle
                      defaultChecked={false}
                      icons={false}
                      // onChange={this.handleTofuChange}
                    />
                  </td>
                  <td>
                    <p className="text-danger">delete</p>
                  </td>
                </tr>
                <tr>
                  <td>Slack</td>
                  <td>Name 1</td>
                  <td>15 Feb 2021, 12PM</td>
                  <td>Not Provided</td>
                  <td>
                    {" "}
                    <Toggle
                      defaultChecked={false}
                      icons={false}
                      // onChange={this.handleTofuChange}
                    />
                  </td>
                  <td>
                    <p className="text-danger">delete</p>
                  </td>
                </tr>
                <tr>
                  <td>Slack</td>
                  <td>Name 1</td>
                  <td>15 Feb 2021, 12PM</td>
                  <td>Not Provided</td>
                  <td>
                    {" "}
                    <Toggle
                      defaultChecked={false}
                      icons={false}
                      // onChange={this.handleTofuChange}
                    />
                  </td>
                  <td>
                    <p className="text-danger">delete</p>
                  </td>
                </tr>
                <tr>
                  <td>Slack</td>
                  <td>Name 1</td>
                  <td>15 Feb 2021, 12PM</td>
                  <td>Not Provided</td>
                  <td>
                    {" "}
                    <Toggle
                      defaultChecked={false}
                      icons={false}
                      // onChange={this.handleTofuChange}
                    />
                  </td>
                  <td>
                    <p className="text-danger">delete</p>
                  </td>
                </tr>
                <tr>
                  <td>Slack</td>
                  <td>Name 1</td>
                  <td>15 Feb 2021, 12PM</td>
                  <td>Not Provided</td>
                  <td>
                    {" "}
                    <Toggle
                      defaultChecked={false}
                      icons={false}
                      // onChange={this.handleTofuChange}
                    />
                  </td>
                  <td>
                    <p className="text-danger">delete</p>
                  </td>
                </tr>
                <tr>
                  <td>Slack</td>
                  <td>Name 1</td>
                  <td>15 Feb 2021, 12PM</td>
                  <td>Not Provided</td>
                  <td>
                    {" "}
                    <Toggle
                      defaultChecked={false}
                      icons={false}
                      // onChange={this.handleTofuChange}
                    />
                  </td>
                  <td>
                    <p className="text-danger">delete</p>
                  </td>
                </tr>
              </tbody>
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
                    | 0 of 0-0 of 0 items
                  </td>
                  <td colSpan="4" align="right">
                    <span className="rightnav">
                      <label>0-0 of 0 pages</label>
                      <Pagination>
                        <>
                          <Pagination.Prev
                          // disabled={list.first}
                          // onClick={() => {
                          //   onPreviousClick(list.number + 1);
                          // }}
                          />
                          <Form.Control
                            className="d-inline-block w-auto border-0 shadow-none"
                            as="select"
                            onChange={(e) => onPageChange(e.target.value)}
                            // value={list.number + 1}
                          >
                            {[...Array(5)].map((el, index) => (
                              <option vlaue={index + 1}>{index + 1}</option>
                            ))}
                          </Form.Control>
                          <Pagination.Next
                          // disabled={list.last}
                          // onClick={() => {
                          //   // onNextClick(list.number + 1);
                          // }}
                          />
                        </>
                      </Pagination>
                    </span>
                  </td>
                </tr>{" "}
              </tfoot>

              {/* <TableHeader onSortClick={onSortClick} sortType={sortType} />
              {loading ? (
                <Loader isTable={true} />
              ) : (
                <TableBody
                  assessmentReports={assessmentReports}
                  onViewAlertsClick={onViewAlertsClick}
                />
              )} */}
              {/* <TableFooter
                onPageSizeChange={onPageSizeChange}
                // list={assessmentReports}
                onPreviousClick={onPreviousClick}
                onPageChange={onPageChange}
                onNextClick={onNextClick}
              /> */}
            </Table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default IntegrationList;
