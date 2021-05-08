import React from "react";
import { Form } from "react-bootstrap";

const FilterComponent = (props) => {
  const { filteroption, onAlertsFilterChange } = props;
  return (
    <React.Fragment>
      {filteroption &&
        filteroption.serviceTypesOptions &&
        filteroption.serviceTypesOptions
          .length && (
          <Form.Control
            as="select"
            title="AWS-service"
            onChange={(e) => {
              onAlertsFilterChange("serviceType", e.target.value);
            }}
          >
            <option value="">Aws Sevices</option>(
            {filteroption.serviceTypesOptions.map(
              (Options) => (
                <option key={Options.key}>{Options.value}</option>
              )
            )}
                      )
          </Form.Control>
        )}
      {filteroption &&
        filteroption.resourceTypesOptions &&
        filteroption.resourceTypesOptions
          .length && (
          <Form.Control
            as="select"
            title="AWS-service"
            onChange={(e) => {
              onAlertsFilterChange("resourceType", e.target.value);
            }}
          >
            <option value="">All Resource type</option>(
            {filteroption.resourceTypesOptions.map(
              (Options) => (
                <option key={Options.key}>{Options.value}</option>
              )
            )}
                      )
          </Form.Control>
        )}
      {filteroption &&
        filteroption.severityOptions &&
        filteroption.severityOptions
          .length && (
          <Form.Control
            as="select"
            title="AWS-service"
            onChange={(e) => {
              onAlertsFilterChange("severity", e.target.value);
            }}
          >
            <option value="All Service">All Sevices</option>(
            {filteroption.severityOptions.map(
              (Options) => (
                <option key={Options.key}>{Options.value}</option>
              )
            )}
                      )
          </Form.Control>
        )}

    </React.Fragment>
  );
};

export default FilterComponent;
