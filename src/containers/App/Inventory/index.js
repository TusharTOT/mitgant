import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import BarChartComponent from './../../../components/App/Inventory/BarChartComponent';
import { getExpectedStats, getCloudStats } from '../../../actions/dashboardActions';
import InventoryTable from './InventoryTable';

const Inventory = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getExpectedStats());
        dispatch(getCloudStats());
    }, [dispatch]);

    return (
        <div className="inventory assessmentmain">
            <div className="card-header bg-transparent border-0 d-flex align-items-center justify-content-between pr-0 pt-0">
                <h3>Inventory</h3>
                <Button variant="primary">Start Assessment +</Button>
            </div>
            <div className="card mb-3">
                <div className="card-body">
                    <div className="topheading">
                        <h4>Drift Analysis</h4>
                        <span className="custom-border"></span>
                    </div>
                    <h5 className="drift-chart-heading pt-5 ml-3">Real-Time Tracking & Detection of Cloud Resources Changes</h5>
                    <BarChartComponent />
                </div>
            </div>
            <InventoryTable />
        </div>
    );
};

export default Inventory;
