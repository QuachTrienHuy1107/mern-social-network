import React from "react";

export default function search() {
    return (
        <form className="search_form">
            <input type="text" name="search" id="search" title="Enter to Search" placeholder="Enter to Search" />

            <button type="submit" style={{ display: "none" }}></button>
        </form>
    );
}
