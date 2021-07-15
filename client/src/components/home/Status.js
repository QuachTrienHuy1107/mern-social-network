import React from "react";
import avatar from "../../assets/imgs/avatar.png";
export default function status() {
    return (
        <div className="status my-3 d-flex">
            <img width="50" height="50" src={avatar} alt="" />

            <button className="statusBtn flex-fill">Hi, what are you thinking?</button>
        </div>
    );
}
