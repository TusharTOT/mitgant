import React, { useEffect, useCallback, useState } from 'react';
import { Table, OverlayTrigger } from 'react-bootstrap';
import { add3Dots } from '../../../util/common';
import TableComponent from './Table';
import { getInventory } from './../../../actions/InventoryAction';
import { useDispatch, useSelector } from 'react-redux';
import MainHeader from './../MainHeader';
import RenderTooltip from './../../Comman/RenderTooltip';
import UseModal from './../../Modals/UseModal';

const Policies = (props) => {
    const { category, title, selectedTab } = props;
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false);
    const [entity, setEntity] = useState({});

    const toggle = () => setModal(!modal);

    const itemSelect = (item) => {
        setEntity(item);
        toggle();
    };


    const { policy } = useSelector(({ inventoryReducer }) => inventoryReducer);

    useEffect(() => {
        dispatch(getInventory(category));
    }, [category, dispatch]);

    const processPolicy = useCallback(
        (policy) => {
            return policy.length > 0 && policy === 'None' ? (
                policy
            ) : (
                <pre>
                    {entity.iamPolicy &&
                        JSON.stringify(JSON.parse(entity.iamPolicy), null, 2)}
                </pre>
            );
        },
        [entity.iamPolicy],
    );

    const resourceDetails = useCallback(
        () => (
            <Table bordered className="p-0 m-0">
                <tbody>
                    <tr>
                        <th scope="row">Policy Name</th>
                        <td>{entity.policy || 'Not provided'}</td>
                    </tr>
                    <tr>
                        <th scope="row">Drifted</th>
                        <td className="text-capitalize">
                            {entity.drifted !== null
                                ? entity.drifted.toString()
                                : 'Not provided'}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">IAM Policy</th>
                        <td>{processPolicy(entity.iamPolicy)}</td>
                    </tr>
                    <tr>
                        <th scope="row">Policy ARN</th>
                        <td>{entity.policyArn || 'Not provided'}</td>
                    </tr>
                </tbody>
            </Table>
        ),
        [entity, processPolicy],
    );

    const columns = [
        { header: 'Policy Name' },
        { header: 'Drifted' },
        { header: 'Policy Arn' },
    ];

    const mapResource = () =>
        policy && policy.map((item, index) => (
            <tr key={index} onClick={() => { itemSelect(item) }}>
                <td>
                    <OverlayTrigger
                        placement="top"
                        delay={{ show: 350 }}
                        overlay={RenderTooltip(item.policy)}
                    ><span>{add3Dots(item.policy) || 'Not provided'}</span></OverlayTrigger>
                </td>
                <td className="text-capitalize">
                    {item.drifted !== null ? item.drifted.toString() : 'Not provided'}
                </td>
                <td>{item.policyArn || 'Not provided'}</td>
            </tr>
        ));

    const dataSource = policy ? mapResource() : [];

    return (
        <>
            {policy && selectedTab === "POLICY" ? (
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
                header="Policy Resource Item"
                component={resourceDetails}
            />
        </>
    );
};

export default Policies;