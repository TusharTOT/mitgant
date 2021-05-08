import React from 'react';
import { Alert } from 'react-bootstrap';
import warningIcon from '../../assets/Images/Webapp/svg/warning.svg';

const Instruction = () => {
    return (
        <div className="aws-wrapper inst-wrapper h-100">
            <div className="instruction">
                <Alert variant={'warning'}>
                    <img src={warningIcon} alt="warning" />
                Please do not refresh this page after clicking Launch Stack button.
                </Alert>
                <hr />
                <p>
                    Mitigant requires read-only permissions to your AWS account in order to assess the security posture and provide recommendations for security
                    improvements. We use AWS CloudFormation Template to automate this process. Visit <a href="#">Mitigant FAQs</a> to learn more about this process.
                </p>
                <div className="inst-list">
                    <ol>
                        <li>Select your default AWS region.</li>
                        <li>Click <b>Launch Stack</b> image to Create Stack on your AWS master mccount</li>
                        <li>Accept the AWS Cloudformation agreement, and create stack. Please do not refresh browser.</li>
                        <li>When status is <b>CREATE_COMPLETE</b>, copy Role ARN from Output tab.</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Instruction;