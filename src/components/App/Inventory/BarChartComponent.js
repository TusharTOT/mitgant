import React, { useEffect } from 'react';
import ReactApexChart from "react-apexcharts";
import { useSelector } from 'react-redux';
import Loader from './../../../Loader/Loader';

const BarChartComponent = () => {

    const { stats, cloudStats } = useSelector(({ dashboardReducer }) => dashboardReducer);
    const { loading } = useSelector(({ common }) => common);

    const getStats = (data) => {
        const driftAnalysis = data.driftAnalysis && data.driftAnalysis;
        if (driftAnalysis) {
            return [
                driftAnalysis.iamUser.totalexpectedState,
                driftAnalysis.policy.totalexpectedState,
                driftAnalysis.bucket.totalexpectedState,
                driftAnalysis.lambda.totalexpectedState,
                driftAnalysis.instance.totalexpectedState,
                driftAnalysis.rdsDatabase.totalexpectedState,
                driftAnalysis.dynamoDb.totalexpectedState,
                driftAnalysis.elasticSearch.totalexpectedState,
            ]
        }
    }

    const getCloudStats = (data) => {
        const driftAnalysis = data.driftAnalysis && data.driftAnalysis;
        if (driftAnalysis) {
            return [
                driftAnalysis.iamUser.totalcloudState,
                driftAnalysis.policy.totalcloudState,
                driftAnalysis.bucket.totalcloudState,
                driftAnalysis.lambda.totalcloudState,
                driftAnalysis.instance.totalcloudState,
                driftAnalysis.rdsDatabase.totalcloudState,
                driftAnalysis.dynamoDb.totalcloudState,
                driftAnalysis.elasticSearch.totalcloudState,
            ]
        }
    }

    const expacted = getStats(stats);
    const cloud = getCloudStats(cloudStats);

    const driftOption = {
        colors: ['#E71D32', '#3D70B2'],
        chart: {
            type: 'bar',
            toolbar: {
                show: false
            },
            height: 350
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '40%',
                endingShape: 'flat',
            },
        },
        dataLabels: { enabled: false },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Users', 'IAM Policies', 'Buckets', 'Lambda', 'Instances', 'RDS Instance', 'DynamoDB', 'Elasticsearch'],
        },
        yaxis: {
            title: { text: 'Resource Count' }
        },
        fill: { opacity: 1 },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val
                }
            }
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right'
        }
    }

    const driftSeries = [{
        name: 'Secure Baseline',
        data: expacted
    }, {
        name: 'Actual State',
        data: cloud
    }]


    if (expacted && cloud) {
        return (
            <div id="chart" className="p-3">
                <ReactApexChart options={driftOption} series={driftSeries} type="bar" height={350} />
            </div>
        )
    } else {
        return <Loader />
    }

};

export default BarChartComponent;