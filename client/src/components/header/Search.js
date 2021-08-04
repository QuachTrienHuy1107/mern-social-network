import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataAPI } from "../../utils/fetchData";
// https://v-network-devat.herokuapp.com/api/search
export default function Search() {
    const [search, setSearch] = useState("");
    const { auth } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        if (search && auth.token) {
            axios
                .get(`https://v-network-devat.herokuapp.com/api/search?username=${search}`)
                .then((res) => {
                    const fetch = res.data;
                    console.log(fetch);
                })
                .catch((error) => console.log(error));
        }
    }, [auth.token, search]);
    return (
        <form className="search_form">
            <input
                type="text"
                name="search"
                id="search"
                value={search}
                title="Enter to Search"
                placeholder="Enter to Search"
                onChange={(e) => setSearch(e.target.value.toLowerCase().replace(/ /g, ""))}
            />

            <button type="submit" style={{ display: "none" }}></button>
        </form>
    );
}
