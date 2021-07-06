import React from "react";
import { Link } from "react-router-dom";

export default function menu() {
    return (
        <div className="menu">
            <ul className="navbar-nav flex-row">
                <li className={`nav-item px-2 `}>
                    <Link className="nav-link">
                        <span className="material-icons">a</span>
                    </Link>
                </li>

                <li className="nav-item dropdown" style={{ opacity: 1 }}>
                    <span
                        className="nav-link position-relative"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <span className="material-icons">favorite</span>

                        <span className="notify_length">b</span>
                    </span>

                    <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                        style={{ transform: "translateX(75px)" }}
                    ></div>
                </li>

                <li className="nav-item dropdown" style={{ opacity: 1 }}>
                    <span
                        className="nav-link dropdown-toggle"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    ></span>

                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item">Profile</Link>

                        <label htmlFor="theme" className="dropdown-item"></label>

                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="/">
                            Logout
                        </Link>
                    </div>
                </li>
            </ul>
        </div>
    );
}
