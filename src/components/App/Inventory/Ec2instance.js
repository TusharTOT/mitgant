import React, { useEffect, useCallback, useState } from 'react';
import { Table, OverlayTrigger } from 'react-bootstrap';
import { dateFormater, add3Dots } from '../../../util/common';
import TableComponent from './Table';
import { getInventory } from './../../../actions/InventoryAction';
import { useDispatch, useSelector } from 'react-redux';
import MainHeader from './../MainHeader';
import RenderTooltip from './../../Comman/RenderTooltip';
import UseModal from './../../Modals/UseModal';

const Ec2instance = (props) => {
    const { category, title, selectedTab } = props;
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false);
    const [entity, setEntity] = useState({});

    const toggle = () => setModal(!modal);

    const { ec2_instance } = useSelector(({ inventoryReducer }) => inventoryReducer);

    useEffect(() => {
        dispatch(getInventory(category));
    }, [category, dispatch]);

    const itemSelect = (item) => {
        setEntity(item);
        toggle();
    };

    const resourceDetails = useCallback(
        () => (
            <Table bordered className="p-0 m-0">
                <tbody>
                    <tr>
                        <th scope="row">Instance ID</th>
                        <td>{entity.instanceId || 'Not provided'}</td>
                    </tr>
                    <tr>
                        <th scope="row">Security Group Name</th>
                        <td>
                            {' '}
                            {entity.securityGroupNames.length > 0
                                ? entity.securityGroupNames.join(', ')
                                : 'None'}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">VPC Name</th>
                        <td>{entity.vpcName || 'None'}</td>
                    </tr>
                    <tr>
                        <th scope="row">Lanuch Time</th>
                        <td>
                            {dateFormater(entity.launchTime, 'time') || 'Not provided'}
                        </td>
                    </tr>
                </tbody>
            </Table>
        ),
        [entity],
    );

    const columns = [
        { header: 'Instance ID' },
        { header: 'Security Group Names' },
        { header: 'VPC Name' },
        { header: 'Launch Time' },
    ];

    const mapResource = () =>
        ec2_instance && ec2_instance.map((item, index) => (
            <tr key={index} onClick={() => { itemSelect(item) }}>
                <td>
                    <OverlayTrigger
                        placement="top"
                        delay={{ show: 350 }}
                        overlay={RenderTooltip(item.instanceId)}
                    ><span>{add3Dots(item.instanceId) || 'Not provided'}</span></OverlayTrigger>
                </td>
                <td>
                    {item.securityGroupNames.length > 0
                        ? item.securityGroupNames.join(', ')
                        : 'None'}
                </td>
                <td>{item.vpcName || 'None'}</td>
                <td>{dateFormater(item.launchTime, 'time') || 'Not provided'}</td>
            </tr>
        ));

    const dataSource = ec2_instance ? mapResource() : [];

    return (
        <>
            {ec2_instance && selectedTab === "EC2_INSTANCE" ? (
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

export default Ec2instance;