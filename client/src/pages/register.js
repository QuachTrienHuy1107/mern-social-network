import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { register } from "../redux/actions/authAction";
export default function Register() {
    const { auth, notify } = useSelector((state) => state);
    const initialState = { username: "", email: "", password: "", cf_password: "" };
    const [userData, setUserData] = useState(initialState);
    const { username, email, password, cf_password } = userData;
    const [typePassword, setTypePassword] = useState(false);
    const [typeCfPassword, setTypeCfPassword] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        if (auth.token) {
            history.push("/login");
        }
    }, [auth.token, history]);

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(register(userData));
    };
    return (
        <div className="auth_page">
            <form onSubmit={handleSubmit}>
                <h3 className="text-uppercase text-danger text-center mb-4">Register</h3>

                <div className="form-group">
                    <label htmlFor="username">User Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        value={username.toLocaleLowerCase().replace(/ /g, "")}
                        onChange={handleChangeInput}
                        style={{ background: `${notify.username ? "#fd2d6a14" : ""}` }}
                    />
                    <small className="form-text text-danger">{notify.username ? notify.username : ""}</small>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        name="email"
                        value={email}
                        onChange={handleChangeInput}
                        style={{ background: `${notify.username ? "#fd2d6a14" : ""}` }}
                    />

                    <small className="form-text text-danger">{notify.email ? notify.email : ""}</small>
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

                {/* <div className=" justify-content-between d-flex mx-0 mb-3">
                    <label htmlFor="male">
                        Male: <input type="radio" id="male" name="gender" value="male" defaultChecked />
                    </label>

                    <label htmlFor="female">
                        Female: <input type="radio" id="female" name="gender" value="female" />
                    </label>

                    <label htmlFor="other">
                        Other: <input type="radio" id="other" name="gender" value="other" />
                    </label>
                </div> */}

                <button type="submit" className="btn btn-dark w-100">
                    Register
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
