import React from 'react';

const ForgotForm = (props) => {

    const {
        values,
        touched,
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
    } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="validationCustom01">Email</label>
                <input
                    type="text"
                    className={`form-control form-control-lg ${errors.email && touched.email ? 'has-error' : ''}`}
                    id="Email"
                    placeholder="Enter your email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.email && touched.email && (
                    <p className="text-danger">{errors.email}</p>
                )}
            </div>
            <div className="form-group mt-4">
                <button
                    type="Submit sign-button"
                    className="btn btn-primary w-100 btn-common"
                    disabled={isSubmitting}
                >
                    Send
            </button>
            </div>
        </form>
    );
};

export default ForgotForm;