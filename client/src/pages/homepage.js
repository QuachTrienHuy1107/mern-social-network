import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Status from "../components/home/status";
import Posts from "../components/home/posts";
import "../styles/pages/home.css";
import RightSideBar from "../components/home/rightsidebar";
import avatar from "../assets/imgs/logo192.png";
import { Container } from "@material-ui/core";
import Header from "../components/header/header";

let scroll = 0;
function Homepage() {
    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.location.pathname === "/") {
                scroll = window.pageYOffset;
                return scroll;
            }
        });
    }, []);

    return (
        <>
            <Header />
            <Container>
                <div className="home row mx-0">
                    <div className="col-md-8">
                        <Status />

                        <Posts />
                    </div>

                    <div className="col-md-4">
                        <RightSideBar />
                    </div>
                </div>
            </Container>
        </>
    );
}
export default Homepage;
