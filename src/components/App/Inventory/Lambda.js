import React, { useEffect, useCallback, useState } from 'react';
import { Table, OverlayTrigger } from 'react-bootstrap';
import { dateFormater, add3Dots } from '../../../util/common';
import TableComponent from './Table';
import { getInventory } from './../../../actions/InventoryAction';
import { useDispatch, useSelector } from 'react-redux';
import MainHeader from './../MainHeader';
import RenderTooltip from './../../Comman/RenderTooltip';
import UseModal from './../../Modals/UseModal';

const Lambda = (props) => {
    const { category, title, selectedTab } = props;
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false);
    const [entity, setEntity] = useState({});

    const toggle = () => setModal(!modal);

    const { lambda_functions } = useSelector(({ inventoryReducer }) => inventoryReducer);

    useEffect(() => {
        dispatch(getInventory(category));
    }, [category, dispatch]);


    const resourceDetails = useCallback(
        () => (
            <Table bordered className="p-0 m-0">
                <tbody>
                    <tr>
                        <th scope="row">Function Name</th>
                        <td>{entity.name || 'Not provided'}</td>
                    </tr>
                    <tr>
                        <th scope="row">Last modified</th>
                        <td>
                            {dateFormater(entity.lastModified, 'time') || 'Not provided'}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Role Name</th>
                        <td>{entity.roleName || 'Not provided'}</td>
                    </tr>
                    <tr>
                        <th scope="row">VPC Name</th>
                        <td>{entity.vpcName || 'Not provided'}</td>
                    </tr>
                    <tr>
                        <th scope="row">Runtime</th>
                        <td>{entity.runtime || 'Not provided'}</td>
                    </tr>
                </tbody>
            </Table>
        ),
        [entity],
    );

    const itemSelect = (item) => {
        setEntity(item);
        toggle();
    };

    const columns = [
        { header: 'Function Name' },
        { header: 'Last modified' },
        { header: 'Role Name' },
        { header: 'VPC Name' },
        { header: 'Runtime' },
    ];

    const mapResource = () =>
        lambda_functions && lambda_functions.map((item, index) => (
            <tr key={index} onClick={() => { itemSelect(item) }}>
                <td className="truncate truncate-fixed">
                    <OverlayTrigger
                        placement="top"
                        delay={{ show: 350 }}
                        overlay={RenderTooltip(item.name)}
                    ><span>{add3Dots(item.name) || 'Not provided'}</span></OverlayTrigger>
                </td>
                <td>{dateFormater(item.lastModified, 'time') || 'Not provided'}</td>
                <td className="truncate truncate-fixed">
                    {item.roleName || 'Not provided'}
                </td>
                <td>{item.vpcName || 'Not provided'}</td>
                <td>{item.runtime || 'Not provided'}</td>
            </tr>
        ));

    const dataSource = lambda_functions ? mapResource() : [];

    return (
        <>
            {lambda_functions && selectedTab === "LAMBDA_FUNCTION" ? (
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
                header="Lambda Function"
                component={resourceDetails}
            />
        </>
    );
};

export default Lambda;