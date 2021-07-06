import React from "react";

export default function search() {
    return (
        <form className="search_form">
            <input type="text" name="search" value={search} id="search" title="Enter to Search" />

            <div className="search_icon" style={{ opacity: search ? 0 : 0.3 }}>
                <span className="material-icons">search</span>
                <span>Enter to Search</span>
            </div>

            <div className="close_search">&times;</div>

            <button type="submit" style={{ display: "none" }}>
                Search
            </button>

            <div className="users">User</div>
        </form>
    );
}
