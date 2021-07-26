import React from "react";
import Comments from "./home/Comments";
import InputComment from "./home/InputComment";
import CardBody from "./home/post_card/CardBody";
import CardFooter from "./home/post_card/CardFooter";
import CardHeader from "./home/post_card/CardHeader";
import "../styles/components/comment.css";

export default function PostCard() {
    return (
        <div className="card my-3">
            <CardHeader />
            <CardBody />
            <CardFooter />

            <Comments />
            <InputComment />
        </div>
    );
}
