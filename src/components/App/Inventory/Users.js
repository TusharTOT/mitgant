import React, { useEffect, useCallback, useState } from "react";
import { Table, OverlayTrigger } from "react-bootstrap";
import { dateFormater, add3Dots } from "../../../util/common";
import TableComponent from "./Table";
import { getInventory } from "./../../../actions/InventoryAction";
import { useDispatch, useSelector } from "react-redux";
import MainHeader from "./../MainHeader";
import RenderTooltip from "./../../Comman/RenderTooltip";
import UseModal from "./../../Modals/UseModal";

const Users = (props) => {

  const { category, title, selectedTab } = props;
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const [entity, setEntity] = useState({});

  const toggle = () => setModal(!modal);
  const { service_account } = useSelector(
    ({ inventoryReducer }) => inventoryReducer
  );

  const itemSelect = (item) => {
    setEntity(item);
    toggle();
  };

  useEffect(() => {
    dispatch(getInventory(category));
  }, [category, dispatch]);

  const resourceDetails = useCallback(
    () => (
      <div className="p-0">
        <Table bordered className="p-0 m-0">
          <tbody>
            <tr>
              <th scope="row">User Name</th>
              <td>{entity.username || "Not provided"}</td>
            </tr>
            <tr>
              <th scope="row">ARN</th>
              <td>{entity.arn || "Not provided"}</td>
            </tr>
            <tr>
              <th scope="row">Date Created</th>
              <td>
                {entity.createdDate
                  ? dateFormater(entity.createdDate, "time")
                  : "Not provided"}
              </td>
            </tr>
            <tr>
              <th scope="row">Password Enabled</th>
              <td className="text-capitalize">
                {entity.passwordEnabled !== null
                  ? entity.passwordEnabled.toString()
                  : "Not provided"}
              </td>
            </tr>
            <tr>
              <th scope="row">MFA ENabled</th>
              <td className="text-capitalize">
                {entity.mfaActive !== null
                  ? entity.mfaActive.toString()
                  : "Not provided"}
              </td>
            </tr>
            <tr>
              <th scope="row">Password Last Changed</th>
              <td>
                {entity.passwordLastUsed
                  ? dateFormater(entity.passwordLastUsed, "time")
                  : "Not provided"}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    ),
    [entity]
  );

  const columns = [
    { header: "User Name" },
    { header: "Date Created" },
    { header: "Password Enabled" },
    { header: "MFA ENabled" },
    { header: "Password Last Changed" },
  ];

  const mapResource = () =>
    service_account &&
    service_account.map((item, index) => (
      <tr
        key={index}
        onClick={() => {
          itemSelect(item);
        }}
      >
        <td>
          <OverlayTrigger
            placement="top"
            delay={{ show: 350 }}
            overlay={RenderTooltip(item.username)}
          >
            <span>{add3Dots(item.username) || "Not provided"}</span>
          </OverlayTrigger>
        </td>

        <td>
          {item.createdDate
            ? dateFormater(item.createdDate, "time")
            : "Not provided"}
        </td>
        <td className="text-capitalize">
          {item.passwordEnabled !== null
            ? item.passwordEnabled.toString()
            : "Not provided"}
        </td>
        <td className="text-capitalize">
          {item.mfaActive !== null ? item.mfaActive.toString() : "Not provided"}
        </td>
        <td>
          {item.passwordLastUsed
            ? dateFormater(item.passwordLastUsed, "time")
            : "Not provided"}
        </td>
      </tr>
    ));

  const dataSource = service_account ? mapResource() : [];

  return (
    <>
      {service_account && selectedTab === "SERVICE_ACCOUNT" ? (
        <>
          <MainHeader totalListing={dataSource.length} invenType={title} />
          <Table className="border report" hover responsive="md">
            <TableComponent columns={columns} dataSource={dataSource} />
          </Table>
        </>
      ) : (
        ""
      )}

      <UseModal
        toggle={toggle}
        modal={modal}
        header="User Resource Item"
        component={resourceDetails}
      />
    </>
  );
};

export default Users;
