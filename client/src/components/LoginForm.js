import React from "react"
import { Link,useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import * as Yup from "yup"
import { loginUser } from './stateSlices/loginSlice';
import { useSelector, useDispatch } from 'react-redux';


const LoginForm = () => {
    const navigate = useNavigate();
    const { status, loggedinUser, error } = useSelector(state =>state.login);
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email address")
                .required("Please enter your email address"),
            password: Yup.string().required("Please enter your password"),
        }),
        onSubmit: async values => {
            dispatch(loginUser(values));
        },
    })

    if (loggedinUser) {
        localStorage.setItem('loggedinUser', JSON.stringify(loggedinUser));
        navigate.push('/welcome')
}

    return (
        <div className="login-form-container">
            <div className="col-10 col-sm-8 col-md-5 mx-auto">
                <h1 className="font-weight-bold">Login</h1>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group col-10 col-sm-8 col-md-5 mx-auto mt-5">
                    {error && (
                        <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                    )}
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
                <div className="form-group col-10 col-sm-8 col-md-5 mx-auto">
                    <label htmlFor="password">Password</label>
                    <input
                        className="form-control form-control-lg"
                        id="password"
                        name="password"
                        type="password"
                        {...formik.getFieldProps("password")}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <small className="form-text text-danger">
                            {formik.errors.password}
                        </small>
                    ) : null}
                </div>
                <div className="col-10 col-sm-8 col-md-5 mx-auto">
                    <button type="submit" className="btn btn-lg btn-primary btn-block">
                        {status === "loading" ? (
                            <div className="spinner-border text-light" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        ) : null}{" "}
                        Login
                    </button>
                </div>
                <div className="col-10 col-sm-8 col-md-5 mx-auto mt-3">
                    <p>
                        <Link to="/account/forgot" className="password-forgot">
                            I forgot my password
                        </Link>
                    </p>
                    <p className="register-cta">
                        Don't have an account?{" "}
                        <Link className="register" to="/register">
                            Register
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    )
}
export default LoginForm