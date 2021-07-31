import React from "react";
import Animation from "../../assets/gif/LoadingGif.gif";
export default function Loading() {
    return (
        <div
            className="position-fixed w-100 h-100 text-center"
            style={{ background: "rgba(0,0,0,0.4)", zIndex: 100, top: 0, left: 0, width: "45%" }}
        >
            <img src={Animation} alt="loading..." />
        </div>
    );
}
