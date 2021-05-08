import React, { useState, lazy } from 'react';
import { Nav } from 'react-bootstrap';
import Users from './../../../components/App/Inventory/Users';
import Bucket from './../../../components/App/Inventory/Bucket';
import Policies from './../../../components/App/Inventory/Policies';
import Ec2instance from './../../../components/App/Inventory/Ec2instance';
import RDSInstance from './../../../components/App/Inventory/RDSInstance';
import Lambda from './../../../components/App/Inventory/Lambda';
import ElasticSearch from './../../../components/App/Inventory/ElasticSearch';
import DynamoDB from './../../../components/App/Inventory/DynamoDB';

const InventoryList = lazy(() =>
    import("./../../../components/App/Inventory/index")
);

const InventoryTable = () => {

    const [selectedTab, setselectedTab] = useState("SERVICE_ACCOUNT");

    const handleSelected = (selected) => {
        setselectedTab(selected);
    };

    const inventoryTabs = [
        {
            tabId: 'SERVICE_ACCOUNT',
            title: 'Users',
            component: Users,
        },
        {
            tabId: 'BUCKET',
            title: 'Buckets',
            component: Bucket,
        },
        {
            tabId: 'POLICY',
            title: 'Polices',
            component: Policies,
        },
        {
            tabId: 'EC2_INSTANCE',
            title: 'Ec2 Instances',
            component: Ec2instance,
        },
        {
            tabId: 'RDS',
            title: 'RDS Instances',
            component: RDSInstance,
        },
        {
            tabId: 'LAMBDA_FUNCTION',
            title: 'Lambda Functions',
            component: Lambda,
        },
        {
            tabId: 'ELASTIC_SEARCH',
            title: 'Elasticsearch Domains',
            component: ElasticSearch,
        },
        {
            tabId: 'DYNAMO_DB',
            title: 'DynamoDb Tables',
            component: DynamoDB,
        }
    ];
    return (
        <React.Fragment>
            <div className="tabs p-3">
                <Nav
                    className="inventory-navs"
                    activeKey={selectedTab}
                    onSelect={(selectedKey) => handleSelected(selectedKey)}
                >
                    {
                        inventoryTabs.map((item) => {
                            return (
                                <Nav.Item>
                                    <Nav.Link eventKey={item.tabId}>{item.title}</Nav.Link>
                                </Nav.Item>
                            );
                        })
                    }
                </Nav>
                <span className="custom-border"></span>
            </div>
            <div className="inventory-list mt-4">
                <div className="card">
                    <div className="card-body">
                        {
                            inventoryTabs.map((item) => {
                                return (
                                    <InventoryList component={item.component} title={item.title} tabId={item.tabId} selectedTab={selectedTab} />
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default InventoryTable;