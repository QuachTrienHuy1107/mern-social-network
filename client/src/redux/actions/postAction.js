import axios from "axios";

import { getDataAPI, postDataAPI } from "../../utils/fetchData";
export const TYPES = {
    GET_POSTS: "GET_POSTS",
};
export const getPosts = (data) => async (dispatch) => {
    try {
        dispatch({ type: "NOTIFY", payload: { loading: true } });
        const res = await postDataAPI("post", data);
        console.log(res);
    } catch (error) {
        dispatch({ type: "NOTIFY", payload: { error: "Get Posts Failed" } });
    }
};
