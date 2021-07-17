import React, { useState } from "react";
import avatar from "../../assets/imgs/avatar.png";
export default function Info() {
    const [showFollowers, setShowFollowers] = useState(false);
    const [showFollowing, setShowFollowing] = useState(false);
    const [onEdit, setOnEdit] = useState(false);
    return (
        <div className="info">
            <div className="info_container">
                <div className="user__avatar">
                    <img width="200" height="200" src={avatar} size="supper-avatar" />
                </div>

                <div className="info_content">
                    <div className="info_content_title">
                        <h2>QuangMinh</h2>

                        <button className="btn btn-outline-info" onClick={() => setOnEdit(true)}>
                            Edit Profile
                        </button>
                    </div>

                    <div className="follow_btn mt-2 mb-3">
                        <span className="follower mr-3" onClick={() => setShowFollowers(true)}>
                            30 Followers
                        </span>
                        <span className="ml-4" onClick={() => setShowFollowing(true)}>
                            50 Following
                        </span>
                    </div>

                    <h6>
                        MinhCodeChuoi <span className="text-danger phone__user">0123456789</span>
                    </h6>
                    <p className="address__user">15 Nguyễn Huệ</p>
                    <h6 className="email__user">hqminh137@gmail.com</h6>
                    <a href="#" target="_blank" rel="noreferrer">
                        facebook.com
                    </a>
                    <p className="story__user mt-2">Minh's story</p>
                </div>
            </div>
        </div>
    );
}
