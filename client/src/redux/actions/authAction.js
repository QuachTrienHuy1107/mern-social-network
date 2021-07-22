import axios from "axios";
import { useHistory } from "react-router";
import ENDPOINT from "../../api/endpoint";
import { postDataAPI } from "../../utils/fetchData";

export const TYPES = {
    AUTH: "AUTH",
};
export const login = (data) => async (dispatch) => {
    try {
        dispatch({ type: "NOTIFY", payload: { loading: true } });
        const res = await postDataAPI("auth/login", data);
        dispatch({ type: "AUTH", payload: { userData: res.data } });
        localStorage.setItem("islogin", true);
        dispatch({ type: "NOTIFY", payload: { success: "Thành công" } });
    } catch (error) {
        dispatch({ type: "NOTIFY", payload: { error: "Loggin Failed" } });
    }
};
