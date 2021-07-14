import React from "react";
import { Link } from "react-router-dom";
import Menu from "./menu";
import Search from "./search";
import "../../styles/components/header.css";
export default function header() {
    return (
        <div className="header bg-light">
            <nav
                className="navbar navbar-expand-lg navbar-light
    bg-light justify-content-between align-middle"
            >
                <Link to="/" className="logo">
                    <h1 className="navbar-brand text-uppercase p-0 m-0" onClick={() => window.scrollTo({ top: 0 })}>
                        Social App
                    </h1>
                </Link>

                <Search />

                <Menu />
            </nav>
        </div>
    );
}
