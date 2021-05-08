import React, { lazy, useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { withRouter } from "react-router";
import { Formik } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { getAwsLinkRegions } from "../../actions/AwsAccountLink";
import { awsLinkAccount } from "../../actions/AwsAccountLink";
const Instruction = lazy(() =>
  import("./../../components/AwsConfigure/Instruction")
);
const AccountForm = lazy(() =>
  import("./../../components/AwsConfigure/AccountForm")
);
const AwsModals = lazy(() => import("./../../components/AwsConfigure/Modals"));
const AwsStepsModal = lazy(() =>
  import("./../../components/AwsConfigure/StepsModals")
);

const AwsConfigure = () => {
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);
  const [isStepsModal, setIsStepsModal] = useState(true);
  const [externalId] = useState(uuidv4());
  const { awsAccountRegions } = useSelector(
    ({ awsLinkAccount }) => awsLinkAccount
  );
  useEffect(() => {
    dispatch(getAwsLinkRegions());
  }, [dispatch]);

  const handleModalClose = () => {
    setIsModal(false);
  };

  const handleStepsModalClose = () => {
    setIsStepsModal(false);
  };

  return (
    <React.Fragment>
      <h5 className="ml-3 mb-3 mt-4 pt-3 toptitle">Configure Account</h5>
      <Row className="topmain">
        <Col md={8}>
          <Instruction />
        </Col>
        <Col md={4}>
          <div className="aws-wrapper rightbox h-100">
            <h5>Link AWS Account</h5>
            <hr />
            <div className="acc-form">
              <div className="form-div">
                <div className="innerform w-100 bg-white">
                  <Formik
                    initialValues={{
                      region: "EU_CENTRAL_1",
                      roleArn: "",
                    }}
                    validationSchema={Yup.object().shape({
                      roleArn: Yup.string().required("Please Provide Role ARN"),
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                      const accountDetails = {
                        region: values.region,
                        roleArn: values.roleArn.trim(),
                        externalId,
                      };
                      setTimeout(() => {
                        setSubmitting(false);
                        setIsModal(true);
                        dispatch(awsLinkAccount(accountDetails));
                      }, 500);
                    }}
                  >
                    {(props) => (
                      <AccountForm
                        awsAccountRegions={awsAccountRegions}
                        externalId={externalId}
                        {...props}
                      />
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      {isModal && (
        <AwsModals handleModalClose={handleModalClose} isModal={isModal} />
      )}
      {isStepsModal && (
        <AwsStepsModal handleStepsModalClose={handleStepsModalClose} />
      )}
    </React.Fragment>
  );
};

export default withRouter(AwsConfigure);
