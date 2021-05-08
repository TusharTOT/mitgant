import React from 'react';
import { Container, Row } from "react-bootstrap";
import Sidebar from './Sidebar';

const AwsLayout = (props) => {

    return (
        <div className="auth-main">
            <Container className="accounting" fluid>
                <Row className="flex-nowrap">
                    <div id="sidebar-wrapper">
                        <Sidebar {...props} />
                    </div>
                    <div id="page-content-wrapper">
                        {props.children}
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default AwsLayout;