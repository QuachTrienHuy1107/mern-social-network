import { getDataAPI, postDataAPI } from "../../utils/fetchData";
export const TYPES = {
    GET_POSTS: "GET_POSTS",
};
export const getPosts = (data) => async (dispatch) => {
    console.log(data);

    try {
        dispatch({ type: "NOTIFY", payload: { loading: true } });
        const res = await getDataAPI("post", data.token);
        console.log(res);
        dispatch({ type: "GET_POSTS", payload: { postList: res.data.postList } });

        dispatch({ type: "NOTIFY", payload: { success: "Thành công" } });
    } catch (error) {
        dispatch({ type: "NOTIFY", payload: { error: "Get Posts Failed" } });
    }
};
