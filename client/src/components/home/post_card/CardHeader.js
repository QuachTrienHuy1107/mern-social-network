import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../../assets/imgs/avatar.png";
import moment from "moment";
export default function CardHeader({ postList }) {
    return (
        <div className="card_header">
            <div className="d-flex">
                <img width="50" height="50" src={Avatar} size="big-avatar" />

                <div className="card_name ms-3">
                    <h6 className="m-0">
                        <Link to="/profile/userDetail" className="text-dark">
                            {postList.user}
                        </Link>
                    </h6>
                    <p className="mb-0 ">{postList.status}</p>
                    <small>{moment(postList.createdAt).fromNow()}</small>
                </div>
            </div>

            <div className="nav-item dropdown">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-three-dots"
                    viewBox="0 0 16 16"
                >
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>

                <div className="dropdown-menu">
                    <div className="dropdown-item">
                        <span className="material-icons">create</span> Edit Post
                    </div>
                    <div className="dropdown-item">
                        <span className="material-icons">delete_outline</span> Remove Post
                    </div>

                    <div className="dropdown-item">
                        <span className="material-icons">content_copy</span> Copy Link
                    </div>
                </div>
            </div>
        </div>
    );
}
