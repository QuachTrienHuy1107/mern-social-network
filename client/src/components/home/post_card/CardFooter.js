import React from "react";
import { Link } from "react-router-dom";
import Send from "../../../assets/imgs/Send.svg";
import LikeButton from "../../LikeButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import CommentIcon from "@material-ui/icons/Comment";

export default function CardFooter({ postList }) {
    return (
        <div className="card_footer">
            <div className="card_icon_menu">
                <div>
                    <LikeButton />

                    <Link to="/post/postid" className="text-dark">
                        <i className="far fa-comment" />
                    </Link>
                </div>
            </div>

            <div className="d-flex justify-content-between">
                <h6 style={{ padding: "0 25px", cursor: "pointer" }}>
                    <FavoriteBorderIcon />
                    30 likes
                </h6>

                <h6 style={{ padding: "0 25px", cursor: "pointer" }}>
                    <CommentIcon />
                    30 comments
                </h6>
            </div>
        </div>
    );
}
