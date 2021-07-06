import React from "react";

export default function rightsidebar() {
    return (
        <div className="mt-3">
            <div className="d-flex justify-content-between align-items-center my-2">
                <h5 className="text-danger">Suggestions for you</h5>
            </div>

            <div style={{ opacity: 0.5 }} className="my-2">
                <a
                    href="https://www.youtube.com/c/DevATHTML"
                    target="_blank"
                    rel="noreferrer"
                    style={{ wordBreak: "break-all" }}
                >
                    https://www.youtube.com/c/DevATHTML
                </a>
                <small className="d-block">Welcome to our channel "DevAT-VietNam"</small>

                <small>&copy; 2021 V-NETWORK FROM DEV A.T VIET NAM</small>
            </div>
        </div>
    );
}
