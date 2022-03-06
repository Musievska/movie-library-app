import React from "react"
import { Link } from "react-router-dom"

const LoginForm = () => {
    return (
        <div className="login-form-container">
            <div className="col-10 col-sm-8 col-md-5 mx-auto">
                <h1 className="font-weight-bold">Login</h1>
            </div>
            <form>
                <div className="form-group col-10 col-sm-8 col-md-5 mx-auto mt-5">
                    <label htmlFor="email">Email Address</label>
                    <input
                        className="form-control form-control-lg"
                        id="email"
                        name="email"
                        type="email"
                    />
                </div>
                <div className="form-group col-10 col-sm-8 col-md-5 mx-auto">
                    <label htmlFor="password">Password</label>
                    <input
                        className="form-control form-control-lg"
                        id="password"
                        name="password"
                        type="password"
                    />
                </div>
                <div className="col-10 col-sm-8 col-md-5 mx-auto">
                    <button type="submit" className="btn btn-lg btn-primary btn-block">
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