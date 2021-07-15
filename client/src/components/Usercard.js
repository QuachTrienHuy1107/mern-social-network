import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/imgs/avatar.png";
export default function UserCard() {
    return (
        <div className="d-flex">
            <img width="60" height="60" src={avatar} alt="avatar" />
            <div className="user__name" style={{ paddingLeft: 20 }}>
                <Link>
                    Username <p>Nick name</p>
                </Link>
            </div>
        </div>
    );
}
