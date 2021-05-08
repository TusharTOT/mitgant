import React, { useEffect, useCallback, useState } from 'react';
import { Table, OverlayTrigger } from 'react-bootstrap';
import { add3Dots } from '../../../util/common';
import TableComponent from './Table';
import { getInventory } from './../../../actions/InventoryAction';
import { useDispatch, useSelector } from 'react-redux';
import MainHeader from './../MainHeader';
import RenderTooltip from './../../Comman/RenderTooltip';
import UseModal from './../../Modals/UseModal';

const ElasticSearch = (props) => {
    const { category, title, selectedTab } = props;
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false);
    const [entity, setEntity] = useState({});

    const toggle = () => setModal(!modal);

    const { elastic_search } = useSelector(({ inventoryReducer }) => inventoryReducer);

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
                        <th scope="row">Domain Name</th>
                        <td>{entity.domainName || 'Not provided'}</td>
                    </tr>
                    <tr>
                        <th scope="row">HTTPS Enabled</th>
                        <td className="text-capitalize">
                            {' '}
                            {entity.httpsEnabled !== null
                                ? entity.httpsEnabled.toString()
                                : 'Not Provided'}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">VPC security groups</th>
                        <td>
                            {entity.vpcSecurityGroups.length > 0
                                ? entity.vpcSecurityGroups.join(', ')
                                : 'Not Provided'}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Endpoint</th>
                        <td>{entity.endpoint || 'Not provided'}</td>
                    </tr>
                    <tr>
                        <th scope="row">Is Encrypted</th>
                        <td className="text-capitalize">
                            {entity.encrypted !== null
                                ? entity.encrypted.toString()
                                : 'Not Provided'}
                        </td>
                    </tr>
                    {/* <tr>
                  <th scope="row">Security Status</th>
                  <td>{entity.securityStatus || 'Not provided'}</td>
                </tr> */}
                </tbody>
            </Table>
        ),
        [entity],
    );

    const columns = [
        { header: 'Domain Name' },
        { header: 'HTTPS Enabled' },
        { header: 'VPC security groups' },
        { header: 'Endpoint' },
        { header: 'Is Encrypted' },
    ];

    const mapResource = () =>
        elastic_search && elastic_search.map((item, index) => (
            <tr key={index} onClick={() => { itemSelect(item) }}>
                <td>
                    <OverlayTrigger
                        placement="top"
                        delay={{ show: 350 }}
                        overlay={RenderTooltip(item.domainName)}
                    ><span>{add3Dots(item.domainName) || 'Not provided'}</span></OverlayTrigger>
                </td>
                <td className="text-capitalize">
                    {item.httpsEnabled !== null
                        ? item.httpsEnabled.toString()
                        : 'Not Provided'}
                </td>
                <td>
                    {item.vpcSecurityGroups && item.vpcSecurityGroups.length > 0
                        ? item.vpcSecurityGroups.join(', ')
                        : 'Not Provided'}
                </td>
                <td>{item.endpoint || 'Not provided'}</td>
                <td className="text-capitalize">
                    {item.encrypted !== null ? item.encrypted.toString() : 'Not Provided'}
                </td>
            </tr>
        ));

    const dataSource = elastic_search ? mapResource() : [];

    return (
        <>
            {elastic_search && selectedTab === "ELASTIC_SEARCH" ? (
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
                header="Elasticsearch Domains"
                component={resourceDetails}
            />
        </>
    );
};


export default ElasticSearch;