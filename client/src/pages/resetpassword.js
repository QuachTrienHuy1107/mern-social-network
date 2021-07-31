import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { resetpassword } from "../redux/actions/authAction";

export default function Resetpassword() {
    const { auth, notify } = useSelector((state) => state);

    const initialState = { password: "", cf_password: "" };
    const [userData, setUserData] = useState(initialState);
    const { password, cf_password } = userData;
    const [typePassword, setTypePassword] = useState(false);
    const [typeCfPassword, setTypeCfPassword] = useState(false);
    // const history = useHistory();
    const param = useParams();
    // console.log(param);
    const dispatch = useDispatch();

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(resetpassword(userData));
    };
    return (
        <div className="auth_page">
            <form onSubmit={handleSubmit}>
                <h3 className="text-uppercase text-danger text-center mb-4">Reset Password</h3>

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
                            style={{ background: `${notify.username ? "#fd2d6a14" : ""}` }}
                        />
                        <small
                            onClick={() => {
                                setTypePassword(!typePassword);
                            }}
                        >
                            {typePassword ? "Hide" : "Show"}
                        </small>
                    </div>

                    <small className="form-text text-danger">{notify.password ? notify.password : ""}</small>
                </div>

                <div className="form-group">
                    <label htmlFor="cf_password">Confirm Password</label>

                    <div className="pass">
                        <input
                            type={typeCfPassword ? "text" : "password"}
                            className="form-control"
                            id="cf_password"
                            name="cf_password"
                            value={cf_password}
                            onChange={handleChangeInput}
                            style={{ background: `${notify.username ? "#fd2d6a14" : ""}` }}
                        />
                        <small
                            onClick={() => {
                                setTypeCfPassword(!typeCfPassword);
                            }}
                        >
                            {typeCfPassword ? "Hide" : "Show"}
                        </small>
                        <small className="form-text text-danger">{notify.cf_password ? notify.cf_password : ""}</small>
                    </div>
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
