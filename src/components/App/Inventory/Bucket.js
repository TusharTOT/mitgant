import React, { useEffect, useCallback, useState } from 'react';
import { Table, OverlayTrigger } from 'react-bootstrap';
import { dateFormater, add3Dots } from '../../../util/common';
import TableComponent from './Table';
import { getInventory } from './../../../actions/InventoryAction';
import { useDispatch, useSelector } from 'react-redux';
import MainHeader from './../MainHeader';
import RenderTooltip from './../../Comman/RenderTooltip';
import UseModal from './../../Modals/UseModal';

const Bucket = (props) => {
    const { category, title, selectedTab } = props;
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false);
    const [entity, setEntity] = useState({});

    const toggle = () => setModal(!modal);

    const { bucket } = useSelector(({ inventoryReducer }) => inventoryReducer);

    const itemSelect = (item) => {
        setEntity(item);
        toggle();
    };

    useEffect(() => {
        dispatch(getInventory(category));
    }, [category, dispatch]);

    const resourceDetails = useCallback(
        () => (
            <Table bordered className="p-0 m-0">
                <tbody>
                    <tr>
                        <th scope="row">Bucket Name</th>
                        <td>{entity.bucketName}</td>
                    </tr>
                    <tr>
                        <th scope="row">ARN</th>
                        <td>{entity.arn}</td>
                    </tr>
                    <tr>
                        <th scope="row">Creation Date</th>
                        <td>
                            {entity.bucketCreationDate
                                ? dateFormater(entity.bucketCreationDate, 'time')
                                : 'Not provided'}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Logging Status</th>
                        <td className="text-capitalize">
                            {' '}
                            {entity.loggingEnabled !== null
                                ? entity.loggingEnabled.toString()
                                : 'Not provided'}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">MFA Status</th>
                        <td className="text-capitalize">
                            {' '}
                            {entity.mfaEnabled !== null
                                ? entity.mfaEnabled.toString()
                                : 'Not provided'}
                        </td>
                    </tr>
                </tbody>
            </Table>
        ),
        [entity],
    );


    const columns = [
        { header: 'Bucket Name' },
        { header: 'Creation Date' },
        { header: 'Logging Status' },
        { header: 'MFA Enabled' },
    ];

    const mapResource = () =>
        bucket && bucket.map((item, index) => {
            return (
                <tr key={index} onClick={() => { itemSelect(item) }}>
                    <td className="">
                        <OverlayTrigger
                            placement="top"
                            delay={{ show: 350 }}
                            overlay={RenderTooltip(item.bucketName)}
                        ><span>{add3Dots(item.bucketName) || 'Not provided'}</span></OverlayTrigger>
                    </td>
                    <td>
                        {item.dateCreated
                            ? dateFormater(item.bucketCreationDate, 'time')
                            : 'Not provided'}
                    </td>
                    <td className="text-capitalize">
                        {item.loggingEnabled !== null
                            ? item.loggingEnabled.toString()
                            : 'Not provided'}
                    </td>
                    <td className="text-capitalize">
                        {item.mfaEnabled !== null
                            ? item.mfaEnabled.toString()
                            : 'Not provided'}
                    </td>
                </tr>
            )
        });

    const dataSource = bucket ? mapResource() : [];

    return (
        <>
            {bucket && selectedTab === "BUCKET" ? (
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
                header="Bucket Resource Item"
                component={resourceDetails}
            />
        </>
    );
};

export default Bucket;