import React, { useState } from "react";
import Header from "../components/header/Header";
import Info from "../components/profile/Info";
import Saved from "../components/profile/Saved";
import Posts from "../components/profile/Posts";

import "../styles/pages/profile.css";
export default function Profile() {
    const [saveTab, setSaveTab] = useState(false);
    return (
        <>
            <Header />
            <div className="profile">
                <Info />
                <div className="profile_tab">
                    <button className={saveTab ? "" : "active"} onClick={() => setSaveTab(false)}>
                        Posts
                    </button>
                    <button className={saveTab ? "active" : ""} onClick={() => setSaveTab(true)}>
                        Saved
                    </button>
                </div>
                <>{saveTab ? <Saved /> : <Posts />}</>
            </div>
        </>
    );
}
