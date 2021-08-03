import React, { useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../redux/actions/authAction";

export default function Menu() {
    const { auth } = useSelector((state) => state);
    const history = useHistory();
    // useEffect(() => {
    //     localStorage.clear();
    //     history.push("/login");
    // }, [history]);
    const logout = () => {
        const isLogin = localStorage.removeItem("islogin");
        const token = localStorage.removeItem("token");

        if (!isLogin) {
            history.push("/login");
        }
    };
    return (
        <div className="menu">
            <ul className="navbar-nav flex-row">
                <li className="nav-item px-2">
                    <Link className="nav-link" to="/">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="currentColor"
                            class="bi bi-house-door-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
                        </svg>
                    </Link>
                </li>
                <li className="nav-item px-2">
                    <Link className="nav-link">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="currentColor"
                            class="bi bi-chat-dots-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        </svg>
                    </Link>
                </li>
                <li className="nav-item px-2">
                    <Link className="nav-link" to="/discover">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="currentColor"
                            class="bi bi-compass-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="M15.5 8.516a7.5 7.5 0 1 1-9.462-7.24A1 1 0 0 1 7 0h2a1 1 0 0 1 .962 1.276 7.503 7.503 0 0 1 5.538 7.24zm-3.61-3.905L6.94 7.439 4.11 12.39l4.95-2.828 2.828-4.95z" />
                        </svg>
                    </Link>
                </li>
                <li className="nav-item px-2">
                    <Link className="nav-link">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="currentColor"
                            class="bi bi-heart-fill"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                            />
                        </svg>
                    </Link>
                </li>
                {/* dropdown */}
                <div className="profile" style={{ display: "flex" }}>
                    <li className="nav-item dropdown" style={{ opacity: 1 }}>
                        <span
                            className="nav-link position-relative "
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="currentColor"
                                class="bi bi-person-circle"
                                viewBox="0 0 16 16"
                            >
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path
                                    fill-rule="evenodd"
                                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                                />
                            </svg>
                        </span>
                    </li>

                    <li className="nav-item dropdown ">
                        <span
                            style={{ opacity: 1, paddingLeft: 0 }}
                            className="nav-link dropdown-toggle"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        ></span>

                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link to="/profile" className="dropdown-item">
                                Profile
                            </Link>

                            <div className="dropdown-divider"></div>
                            <Link onClick={logout} className="dropdown-item text-dark" to="/login">
                                Logout
                            </Link>
                        </div>
                    </li>
                </div>
            </ul>
        </div>
    );
}
