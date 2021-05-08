import React from 'react';
import { Tooltip } from 'react-bootstrap';

const RenderTooltip = (props) => {
    return (
        <Tooltip className="inventory-tooltip" id="button-tooltip" {...props}>
            {props}
        </Tooltip>
    );
};

export default RenderTooltip;