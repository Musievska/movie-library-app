import React from 'react';
import { useFormik } from 'formik'
import * as Yup from 'yup';

const RegisterForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Please enter your first name'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Please enter your last name'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Please enter your email address'),
            password: Yup.string()
                .min(6, 'Must be at least 6 characters or more')
                .required('Please enter your password')

        }),

        onSubmit: values => {
            console.log(values)
        },
    });

    return (
        <div className="register-form-container">
            <div className="col-10 col-sm-8 col-md-5 mx-auto">
                <h1 className="font-weight-bold">Register</h1>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group col-10 col-sm-8 col-md-5 mx-auto mt-5">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        className="form-control form-control-lg"
                        id="firstName"
                        name="firstName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                    />
                    {formik.errors.firstName ? (
                        <small className="form-text text-danger">
                            {formik.errors.firstName}
                        </small>
                    ) : null}
                </div>
                <div className="form-group col-10 col-sm-8 col-md-5 mx-auto">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        className="form-control form-control-lg"
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                    />
                    {formik.errors.lastName ? (
                        <small className="form-text text-danger">
                            {formik.errors.lastName}
                        </small>
                    ) : null}
                </div>
                <div className="form-group col-10 col-sm-8 col-md-5 mx-auto">
                    <label htmlFor="email">Email</label>
                    <input
                        className="form-control form-control-lg"
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {formik.errors.email ? (
                        <small className="form-text text-danger">
                            {formik.errors.email}
                        </small>
                    ) : null}
                </div>
                <div className="form-group col-10 col-sm-8 col-md-5 mx-auto">
                    <label htmlFor="password">Password</label>
                    <input
                        className="form-control form-control-lg"
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    {formik.errors.password ? (
                        <small className="form-text text-danger">
                            {formik.errors.password}
                        </small>
                    ) : null}
                </div>
                <div className="col-10 col-sm-8 col-md-5 mx-auto">
                    <button
                        type="submit"
                        className="btn btn-lg btn-primary btn-block register-button"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};
export default RegisterForm;