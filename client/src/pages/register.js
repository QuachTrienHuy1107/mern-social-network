import React from "react";
import { useHistory, Link } from "react-router-dom";
export default function Register() {
    return (
        <div className="auth_page">
            <form>
                <h3 className="text-uppercase text-danger text-center mb-4">Register</h3>

                <div className="form-group">
                    <label htmlFor="fullname">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="fullname"
                        name="fullname"
                        style={{ background: `${alert.fullname ? "#fd2d6a14" : ""}` }}
                    />

                    <small className="form-text text-danger">{alert.fullname ? alert.fullname : ""}</small>
                </div>

                <div className="form-group">
                    <label htmlFor="username">User Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        style={{ background: `${alert.username ? "#fd2d6a14" : ""}` }}
                    />

                    <small className="form-text text-danger">{alert.username ? alert.username : ""}</small>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        name="email"
                        style={{ background: `${alert.email ? "#fd2d6a14" : ""}` }}
                    />

                    <small className="form-text text-danger">{alert.email ? alert.email : ""}</small>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>

                    <div className="pass">
                        <input
                            type="pass"
                            className="form-control"
                            id="exampleInputPassword1"
                            name="password"
                            style={{ background: `${alert.password ? "#fd2d6a14" : ""}` }}
                        />
                    </div>

                    <small className="form-text text-danger">{alert.password ? alert.password : ""}</small>
                </div>

                <div className="form-group">
                    <label htmlFor="cf_password">Confirm Password</label>

                    <div className="pass">
                        <input
                            type="pass"
                            className="form-control"
                            id="cf_password"
                            name="cf_password"
                            style={{ background: `${alert.cf_password ? "#fd2d6a14" : ""}` }}
                        />
                    </div>

                    <small className="form-text text-danger">{alert.cf_password ? alert.cf_password : ""}</small>
                </div>

                <div className=" justify-content-between d-flex mx-0 mb-3">
                    <label htmlFor="male">
                        Male: <input type="radio" id="male" name="gender" value="male" defaultChecked />
                    </label>

                    <label htmlFor="female">
                        Female: <input type="radio" id="female" name="gender" value="female" />
                    </label>

                    <label htmlFor="other">
                        Other: <input type="radio" id="other" name="gender" value="other" />
                    </label>
                </div>

                <button type="submit" className="btn btn-dark w-100">
                    Register
                </button>

                <p className="my-2">
                    Already have an account? <p style={{ color: "crimson" }}>Login Now</p>
                </p>
            </form>
        </div>
    );
}
