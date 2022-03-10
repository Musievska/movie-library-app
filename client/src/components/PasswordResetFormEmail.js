import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const PasswordResetFormEmail = () => {

    const formik = useFormik({
        initialValues: {
            email:"",
        },
        validationSchema: Yup.object({
            email: Yup.string("Enter valid email")
                .email("Invalid email")
                .required("Please enter your email adress"),
        }),
        onSubmit: (values) => {
            console.log(values);
        }
    });

    return (
        <div className="passwordResetEmail-form-container">
            <div className="col-10 col-sm-8 col-md-5 mx-auto">
                <h1 className="font-weight-bold">Reset Password</h1>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group col-10 col-sm-8 col-md-5 mx-auto mt-5">
                    <label htmlFor="email">Email Address</label>
                    <input
                        className="form-control form-control-lg"
                        id="email"
                        name="email"
                        type="email"
                        {...formik.getFieldProps("email")}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <small className="form-text text-danger">
                            {formik.errors.email}
                        </small>
                    ) : null}
                </div>
                <div className="col-10 col-sm-8 col-md-5 mx-auto">
                    <button type="submit" className="btn btn-lg btn-primary btn-block">
                        Request Password Reset
                    </button>
                </div>
            </form>
        </div>
    );
    
}

export default PasswordResetFormEmail;