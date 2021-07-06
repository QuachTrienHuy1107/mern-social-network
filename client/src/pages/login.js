import { Button } from "@material-ui/core";
import React from "react";
import "../styles/pages/auth.css";
import { Link } from "react-router-dom";
export default function login() {
    return (
        <div className="auth_page">
            <form>
                <h3 className="text-uppercase text-danger text-center mb-4">Login</h3>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        name="email"
                        aria-describedby="emailHelp"
                    />

                    <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>

                    <div className="pass">
                        <input type="password" className="form-control" id="exampleInputPassword1" name="password" />
                    </div>
                </div>

                <Button variant="contained" color="primary">
                    Login
                </Button>

                <div className="my-2">
                    You don't have an account? <p style={{ color: "crimson" }}>Register Now</p>
                </div>
            </form>
        </div>
    );
}
