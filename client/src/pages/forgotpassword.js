import { Link } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgotpassword } from "../redux/actions/authAction";

export default function Forgotpassword() {
    const initialState = { email: "" };
    const [userData, setUserData] = useState(initialState);
    const { email } = userData;
    const dispatch = useDispatch();

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(forgotpassword(userData));
    };
    return (
        <div className="auth_page">
            <form onSubmit={handleSubmit}>
                <h3 className="text-uppercase text-danger text-center mb-4">Forgot Password ?</h3>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control my-2"
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
                <button type="submit" className="btn btn-dark w-100">
                    Submit
                </button>
                <p className="my-2">
                    Already have an account?{" "}
                    <Link to="/login" style={{ color: "crimson", display: "block" }}>
                        Login Now
                    </Link>
                </p>
            </form>
        </div>
    );
}
