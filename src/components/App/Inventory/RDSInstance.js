import React, { useEffect, useCallback, useState } from 'react';
import { Table, OverlayTrigger } from 'react-bootstrap';
import { add3Dots } from '../../../util/common';
import TableComponent from './Table';
import { getInventory } from './../../../actions/InventoryAction';
import { useDispatch, useSelector } from 'react-redux';
import MainHeader from './../MainHeader';
import RenderTooltip from './../../Comman/RenderTooltip';
import UseModal from './../../Modals/UseModal';

const RDSInstance = (props) => {
    const { category, title, selectedTab } = props;
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false);
    const [entity, setEntity] = useState({});

    const toggle = () => setModal(!modal);

    const itemSelect = (item) => {
        setEntity(item);
        toggle();
    };

    const { rds } = useSelector(({ inventoryReducer }) => inventoryReducer);

    useEffect(() => {
        dispatch(getInventory(category));
    }, [category, dispatch]);

    const resourceDetails = useCallback(
        () => (
            <Table bordered className="p-0 m-0">
                <tbody>
                    <tr>
                        <th scope="row">Instance Name</th>
                        <td>{entity.instanceName || 'Not provided'}</td>
                    </tr>
                    <tr>
                        <th scope="row">Database type</th>
                        <td>{entity.databaseType || 'Not provided'}</td>
                    </tr>
                    <tr>
                        <th scope="row">Security groups ID</th>
                        <td>
                            {entity.vpcSecurityGroups && entity.vpcSecurityGroups.length
                                ? entity.vpcSecurityGroups.join(', ')
                                : 'Not provided'}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Endpoint</th>
                        <td>{entity.endpoint || 'Not provided'}</td>
                    </tr>
                </tbody>
            </Table>
        ),
        [entity],
    );


    const columns = [
        { header: 'Instance Name' },
        { header: 'Database type' },
        { header: 'Security groups ID' },
        { header: 'Endpoint' },
    ];

    const mapResource = () =>
        rds && rds.map((item, index) => (
            <tr key={index} onClick={() => { itemSelect(item) }}>
                <td>
                    <OverlayTrigger
                        placement="top"
                        delay={{ show: 350 }}
                        overlay={RenderTooltip(item.instanceName)}
                    ><span>{add3Dots(item.instanceName) || 'Not provided'}</span></OverlayTrigger>
                </td>
                <td>{item.databaseType || 'Not provided'}</td>
                <td>
                    {item.securityGroupIds && item.securityGroupIds.length > 0
                        ? item.securityGroupIds.join(', ')
                        : 'Not provided'}
                </td>
                <td>{item.endpoint || 'Not provided'}</td>
            </tr>
        ));

    const dataSource = rds ? mapResource() : [];

    return (
        <>
            {rds && selectedTab === "RDS" ? (
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
                header="RDS Instance"
                component={resourceDetails}
            />
        </>
    );
};

export default RDSInstance;