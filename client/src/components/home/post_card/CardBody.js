import React from "react";
import PostImg from "../../../assets/imgs/logo192.png";

export default function CardBody() {
    return (
        <div className="card_body">
            <div
                className="card_body-content"
                style={{
                    filter: "invert(1)",
                    color: "white",
                }}
            >
                <span>This is content of post</span>
            </div>
            <img src={PostImg} alt="" />
        </div>
    );
}
