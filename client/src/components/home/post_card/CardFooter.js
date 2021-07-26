import React from "react";
import { Link } from "react-router-dom";
import Send from "../../../assets/imgs/Send.svg";
import LikeButton from "../../LikeButton";

export default function CardFooter() {
    return (
        <div className="card_footer">
            <div className="card_icon_menu">
                <div>
                    <LikeButton />

                    <Link to="/post/postid" className="text-dark">
                        <i className="far fa-comment" />
                    </Link>

                    <img src={Send} alt="Send" />
                </div>

                <i className="fas fa-bookmark text-info" />
            </div>

            <div className="d-flex justify-content-between">
                <h6 style={{ padding: "0 25px", cursor: "pointer" }}>30 likes</h6>

                <h6 style={{ padding: "0 25px", cursor: "pointer" }}>10 comments</h6>
            </div>
        </div>
    );
}
