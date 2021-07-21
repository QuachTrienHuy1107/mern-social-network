import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/pages/auth.css";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/authAction";

export default function Login() {
    const initialState = { email: "", password: "" };
    const [userData, setUserData] = useState(initialState);
    const [typePassword, setTypePassword] = useState(false);
    const { email, password } = userData;

    const dispatch = useDispatch();

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(login(userData));
    };
    return (
        <div className="auth_page">
            <form onSubmit={handleSubmit}>
                <h3 className="text-uppercase text-danger text-center mb-4">Login</h3>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        name="email"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={handleChangeInput}
                    />

                    <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>

                    <div className="pass">
                        <input
                            type={typePassword ? "text" : "password"}
                            className="form-control"
                            id="exampleInputPassword1"
                            name="password"
                            value={password}
                            onChange={handleChangeInput}
                        />
                        <small
                            onClick={() => {
                                setTypePassword(!typePassword);
                            }}
                        >
                            {typePassword ? "Hide" : "Show"}
                        </small>
                    </div>
                </div>

                <Button type="submit" variant="contained" color="primary" disabled={email && password ? false : true}>
                    Login
                </Button>

                <div className="my-2">
                    You don't have an account?{" "}
                    <Link to="/register" style={{ color: "crimson", textDecoration: "none", display: "block" }}>
                        Register Now
                    </Link>
                </div>
            </form>
        </div>
    );
}
