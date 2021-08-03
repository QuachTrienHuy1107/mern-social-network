import React from "react";
import Comments from "./home/Comments";
import InputComment from "./home/InputComment";
import CardBody from "./home/post_card/CardBody";
import CardFooter from "./home/post_card/CardFooter";
import CardHeader from "./home/post_card/CardHeader";
import "../styles/components/comment.css";
import { useSelector } from "react-redux";

export default function PostCard() {
    const { post } = useSelector((state) => state);

    return (
        <div className="card my-3">
            {post.postLists.map((postList) => (
                <div key={postList._id}>
                    <CardHeader postList={postList} />
                    <CardBody postList={postList} />
                    <CardFooter postList={postList} />

                    <Comments />
                    <InputComment />
                </div>
            ))}
        </div>
    );
}
