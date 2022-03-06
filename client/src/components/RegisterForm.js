import React from "react";
const RegisterForm = () => {
    return (
        <div className="register-form-container">
            <div className="col-10 col-sm-8 col-md-5 mx-auto">
                <h1 className="font-weight-bold">Register</h1>
            </div>
            <form>
                <div className="form-group col-10 col-sm-8 col-md-5 mx-auto mt-5">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        className="form-control form-control-lg"
                        id="firstName"
                        name="firstName"
                        type="text"
                    />
                </div>
                <div className="form-group col-10 col-sm-8 col-md-5 mx-auto">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        className="form-control form-control-lg"
                        id="lastName"
                        name="lastName"
                        type="text"
                    />
                </div>
                <div className="form-group col-10 col-sm-8 col-md-5 mx-auto">
                    <label htmlFor="email">Email</label>
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