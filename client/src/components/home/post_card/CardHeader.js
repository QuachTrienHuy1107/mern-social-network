import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../../assets/imgs/avatar.png";
export default function CardHeader() {
    return (
        <div className="card_header">
            <div className="d-flex">
                <img width="50" height="50" src={Avatar} size="big-avatar" />

                <div className="card_name">
                    <h6 className="m-0">
                        <Link to="/profile/userDetail" className="text-dark">
                            Admin
                        </Link>
                    </h6>
                </div>
            </div>

            <div className="nav-item dropdown">
                <span className="material-icons" id="moreLink" data-toggle="dropdown">
                    ...
                </span>

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
