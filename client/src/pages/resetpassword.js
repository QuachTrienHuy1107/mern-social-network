import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { resetpassword } from "../redux/actions/authAction";

export default function Resetpassword() {
    const { auth, notify } = useSelector((state) => state);

    const initialState = { newPassword: "" };
    const [userData, setUserData] = useState(initialState);
    const { newPassword } = userData;
    const [typeCfPassword, setTypeCfPassword] = useState(false);
    // const history = useHistory();
    const param = useParams();

    const dispatch = useDispatch();

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value, param });
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
                    <label htmlFor="newPassword">Confirm Password</label>

                    <div className="pass">
                        <input
                            type={typeCfPassword ? "text" : "password"}
                            className="form-control"
                            id="newPassword"
                            name="newPassword"
                            value={newPassword}
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
                        <small className="form-text text-danger">{notify.newPassword ? notify.newPassword : ""}</small>
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
