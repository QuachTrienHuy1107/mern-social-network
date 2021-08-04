import React from "react";
import PostImg from "../../../assets/imgs/logo192.png";

export default function CardBody({ postList }) {
    return (
        <div className="card_body ms-3">
            <div
                className="card_body-content"
                style={{
                    filter: "invert(1)",
                    color: "white",
                }}
            >
                <span>{postList.title}</span>
            </div>
            {postList.image ? <img src={postList.image} alt="" /> : <img src={PostImg} alt="" />}
            <img src={postList.image} alt="" />
        </div>
    );
}
