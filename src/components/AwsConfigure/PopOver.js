import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import infoIcon from '../../assets/Images/Webapp/svg/info-icon.svg'

const PopOver = (props) => {
    let { fieldType } = props;
    return (
        <OverlayTrigger
            placement="top"
            overlay={
                <Tooltip className="aws-form-tooltip">
                    {
                        fieldType === "region" ?
                            <p>Default region is...</p>
                            :
                            fieldType === "arn" ?
                                <p>
                                    Paste the Role ARN that you get from MitigantSecurityRole (RoleArn) output after you create stack
                                </p>
                                :
                                <p>
                                    Stack link is ...
                                </p>
                    }
                </Tooltip>
            }>
            <img className="ml-2" src={infoIcon} alt="info-icon" />
        </OverlayTrigger>
    );
};

export default PopOver;