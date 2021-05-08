import React, { lazy, useCallback, useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import stckLinkimg from "../../assets/Images/Webapp/png/stack-link.png";
import { uid5 } from "../../util/common";
const PopOver = lazy(() => import("./PopOver"));
const AccountForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    awsAccountRegions,
    resetForm,
    setFieldValue,
    externalId
  } = props;
  const [region1, setRegion] = useState("EU_CENTRAL_1");

  const handleRegionChange = (e, setFieldValue) => {
    setFieldValue('region', e.target.value);
    setRegion(e.target.value);
  };
  const handleStackLaunch = useCallback(async () => {
    let baseUrl = 'https://console.aws.amazon.com/cloudformation/home';
    baseUrl = `${baseUrl}?region=${region1
      .toLowerCase()
      .replace(
        /_/g,
        '-',
      )}#/stacks/create/review?stackName=MitigantSecurityRole${uid5()}`;
    baseUrl = `${baseUrl}&templateURL=https://auditfy.s3.eu-central-1.amazonaws.com/mitigant_auditor_cloudformation_02.json&`;
    baseUrl = `${baseUrl}param_ExternalId=${externalId}&param_TrustedAccount=412759300955`;

    window.open(baseUrl);
  }, [region1]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="validationCustom01">
          Default region
          <PopOver fieldType={"region"} />
        </label>
        <select
          className={`form-control form-control-lg ${errors.region && touched.region ? "has-error" : ""}`}
          id="region"
          name="region"
          value={values.region}
          onChange={(e) => handleRegionChange(e, setFieldValue)}
          disabled={awsAccountRegions === undefined}
        >
          {awsAccountRegions &&
            awsAccountRegions.length > 0 &&
            awsAccountRegions.map((region) => (
              <option
                key={region.key}
                value={region.key}
                label={`${region.key.toLowerCase().replace(/_/g, "-")}-${region.value}`} />
            ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="validationCustom01">
          Stack Link
          <PopOver fieldType="stackLink" />
        </label>
        <div className="stack-link-img">
          <img src={stckLinkimg} alt="stack-link" onClick={handleStackLaunch} />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="validationCustom01">
          IAM Role ARN
          <PopOver fieldType="arn" />
        </label>
        <input
          type="text"
          className={`form-control form-control-lg ${errors.roleArn && touched.roleArn ? "has-error" : ""
            }`}
          id="roleArn"
          placeholder="Paste here your Role ARN"
          name="roleArn"
          value={values.roleArn}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.roleArn && touched.roleArn && (
          <p className="text-danger">{errors.roleArn}</p>
        )}
      </div>
      <div className="form-group mt-5 mb-0">
        <Row>
          <Col md={6}>
            <button className="cancel-button" onClick={resetForm} type="reset">
              Clear
            </button>
          </Col>
          <Col md={6}>
            <button
              type="Submit"
              className="btn-common"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Col>
        </Row>
      </div>
    </form>
  );
};

export default AccountForm;
