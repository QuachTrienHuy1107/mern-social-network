import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Status from "../components/home/Status";
import Posts from "../components/home/Posts";
import "../styles/pages/home.css";
import RightSideBar from "../components/home/Rightsidebar";
import avatar from "../assets/imgs/logo192.png";
import { Container } from "@material-ui/core";
import Header from "../components/header/Header";
import PostCard from "../components/PostCard";

function Homepage() {
    const { post } = useSelector((state) => state);
    console.log(post);
    return (
        <>
            <Header />
            <Container>
                <div className="home row mx-0">
                    <div className="col-md-8">
                        <Status />
                        {/* {post.result === 0 ? <h2 className="text-center">No Post</h2> : <Posts />} */}
                        <PostCard />
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
