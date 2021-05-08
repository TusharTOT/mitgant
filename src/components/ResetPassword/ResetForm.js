import React from "react";

const ResetForm = (props) => {
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
            <div className="form-group">
                <label htmlFor="validationCustom01">Password</label>
                <input
                    type="password"
                    className={`form-control form-control-lg ${errors.password && touched.password ? 'has-error' : ''}`}
                    id="Password"
                    placeholder="Enter your email"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.password && touched.password && (
                    <p className="text-danger">{errors.password}</p>
                )}
            </div>
            <div className="form-group">
                <label htmlFor="validationCustom01">Confirm Password</label>
                <input
                    type="password"
                    className={`form-control form-control-lg ${errors.confirmPassword && touched.confirmPassword ? 'has-error' : ''}`}
                    id="ConfirmPassword"
                    placeholder="Enter your email"
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.confirmPassword && touched.confirmPassword && (
                    <p className="text-danger">{errors.confirmPassword}</p>
                )}
            </div>
            <div className="form-group mt-4">
                <button
                    type="Submit sign-button"
                    className="btn btn-primary w-100 btn-common"
                    disabled={isSubmitting}
                >
                    Save
        </button>
            </div>
        </form>
    );
};
export default ResetForm;
