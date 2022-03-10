import React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useSelector, useDispatch } from "react-redux"
import { sendNewPassword } from "./stateSlices/passwordResetPasswordSlice"


const PasswordResetFormPassword = ({ history, match }) => {
    const { status, passwordReset, error } = useSelector(
        state => state.passwordResetPassword
    )
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            password: "",
        },
        validationSchema: Yup.object({
            password: Yup.string().required("Please enter your password"),
        }),
        onSubmit: values => {
            const { password } = values
            dispatch(
                sendNewPassword({
                    password,
                    token: match.params.token,
                })
            )
        },
    })
    if (passwordReset) {
        history.push("/login")
    }
    return (
        <div className="passwordResetPassword-form-container">
            <div className="col-10 col-sm-8 col-md-5 mx-auto">
                <h1 className="font-weight-bold">Reset Password</h1>
            </div>
            <form onSubmit={formik.handleSubmit}>
                {error && (
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                )}
                <div className="form-group col-10 col-sm-8 col-md-5 mx-auto mt-5"></div>
                <div className="form-group col-10 col-sm-8 col-md-5 mx-auto">
                    <label htmlFor="password">Enter a new password:</label>
                    <input
                        className="form-control form-control-lg"
                        id="password"
                        name="password"
                        type="password"
                        {...formik.getFieldProps("email")}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <small className="form-text text-danger">
                            {formik.errors.password}
                        </small>
                    ) : null}
                </div>
                <div className="col-10 col-sm-8 col-md-5 mx-auto">
                    <button
                        type="submit"
                        className="btn btn-lg btn-primary btn-block login-button"
                    >
                        {status === "loading" ? (
                            <div className="spinner-border text-light" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        ) : null}{" "}
                        Reset Password
                    </button>
                </div>
            </form>
        </div>
    )
}
export default PasswordResetFormPassword