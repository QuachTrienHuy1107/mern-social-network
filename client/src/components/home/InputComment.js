import React from "react";

export default function InputComment() {
    return (
        <form className="card-footer comment_input">
            <input
                type="text"
                placeholder="Add your comments..."
                style={{
                    filter: "invert(1)",
                    color: "white",
                    background: "rgba(0,0,0,.03)",
                }}
            />

            {/* <Icons setContent={setContent} content={content} theme={theme} /> */}

            <button type="submit" className="postBtn">
                Post
            </button>
        </form>
    );
}
