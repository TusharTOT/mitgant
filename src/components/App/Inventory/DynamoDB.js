import React, { useEffect, useCallback, useState } from 'react';
import { Table, OverlayTrigger } from 'react-bootstrap';
import { dateFormater, add3Dots } from '../../../util/common';
import TableComponent from './Table';
import { getInventory } from './../../../actions/InventoryAction';
import { useDispatch, useSelector } from 'react-redux';
import MainHeader from './../MainHeader';
import RenderTooltip from './../../Comman/RenderTooltip';
import UseModal from './../../Modals/UseModal';

const DynamoDB = (props) => {
    const { category, title, selectedTab } = props;
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false);
    const [entity, setEntity] = useState({});

    const toggle = () => setModal(!modal);

    const itemSelect = (item) => {
        setEntity(item);
        toggle();
    };

    const { dynamo_db } = useSelector(({ inventoryReducer }) => inventoryReducer);

    useEffect(() => {
        dispatch(getInventory(category));
    }, [category, dispatch]);

    const resourceDetails = useCallback(
        () => (
            <Table bordered className="p-0 m-0">
                <tbody>
                    <tr>
                        <th scope="row">Table Name</th>
                        <td>{entity.tableName || 'Not provided'}</td>
                    </tr>
                    <tr>
                        <th scope="row">ARN</th>
                        <td>{entity.tableArn || 'Not provided'}</td>
                    </tr>
                    <tr>
                        <th scope="row">Backup Status</th>
                        <td>{entity.backupStatus || 'Not provided'}</td>
                    </tr>
                    <tr>
                        <th scope="row">Creation time</th>
                        <td>
                            {dateFormater(entity.creationTime, 'time') || 'Not provided'}
                        </td>
                    </tr>
                </tbody>
            </Table>
        ),
        [entity],
    );

    const columns = [
        { header: 'Table Name' },
        { header: 'ARN' },
        { header: 'Backup Status' },
        { header: 'Creation time' },
    ];

    const mapResource = () =>
        dynamo_db && dynamo_db.map((item, index) => (
            <tr key={index} onClick={() => { itemSelect(item) }}>
                <td className="truncate truncate-fixed">
                    <OverlayTrigger
                        placement="top"
                        delay={{ show: 350 }}
                        overlay={RenderTooltip(item.tableName)}
                    ><span>{add3Dots(item.tableName) || 'Not provided'}</span></OverlayTrigger>
                </td>
                <td>{item.tableArn || 'Not provided'}</td>
                <td>{item.backupStatus || 'Not provided'}</td>

                <td>{dateFormater(item.creationTime, 'time') || 'Not provided'}</td>
            </tr>
        ));

    const dataSource = dynamo_db ? mapResource() : [];

    return (
        <>
            {dynamo_db && selectedTab === "DYNAMO_DB" ? (
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
                header="Ec2 Instance"
                component={resourceDetails}
            />
        </>
    );
};

export default DynamoDB;