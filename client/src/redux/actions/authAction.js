import { postDataAPI, putDataAPI } from "../../utils/fetchData";
import valid from "../../utils/valid";
export const TYPES = {
    AUTH: "AUTH",
};
export const login = (data) => async (dispatch) => {
    try {
        dispatch({ type: "NOTIFY", payload: { loading: true, isLogin: false } });
        const res = await postDataAPI("auth/login", data);

        dispatch({ type: "AUTH", payload: { userData: res.data, token: res.data.accessToken } });
        localStorage.setItem("islogin", true);
        localStorage.setItem("token", res.data.accessToken);
        dispatch({ type: "NOTIFY", payload: { success: "Thành công", isLogin: true } });
    } catch (error) {
        dispatch({ type: "NOTIFY", payload: { error: "Loggin Failed" } });
    }
};
export const refreshToken = () => async (dispatch) => {
    // const isLogin = localStorage.getItem("islogin");
    // if (isLogin) {
    //     dispatch({ type: "NOTIFY", payload: { loading: true } });
    //     try {
    //         const res = await postDataAPI("auth/token");
    //         console.log(res);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
};
export const register = (data) => async (dispatch) => {
    try {
        const check = valid(data);
        if (check.errLength > 0) {
            return dispatch({ type: "NOTIFY", payload: check.errMsg });
        }
        dispatch({ type: "NOTIFY", payload: { loading: true } });
        const res = await postDataAPI("auth/signup", data);

        dispatch({ type: "AUTH", payload: { userData: res.data } });
        // localStorage.setItem("islogin", true);
        dispatch({ type: "NOTIFY", payload: { success: "Thành công", isLogin: true } });
    } catch (error) {
        dispatch({ type: "NOTIFY", payload: { error: "Username is already" } });
    }
};
export const forgotpassword = (data) => async (dispatch) => {
    try {
        dispatch({ type: "NOTIFY", payload: { loading: true } });
        const res = await postDataAPI("auth/forgot-password", data);
        console.log(res);
        dispatch({ type: "AUTH", payload: { userData: res.data } });

        dispatch({ type: "NOTIFY", payload: { success: "Thành công" } });
    } catch (error) {
        dispatch({ type: "NOTIFY", payload: { error: "Wrong Email" } });
    }
};
export const logout = () => async (dispatch) => {
    // try {
    //     localStorage.removeItem("islogin");
    // } catch (error) {
    //     dispatch({ type: "NOTIFY", payload: { error: "Wrong Email" } });
    // }
};
export const resetpassword = (data) => async (dispatch) => {
    try {
        dispatch({ type: "NOTIFY", payload: { loading: true } });
        const res = await putDataAPI(`auth/reset-password/${data.param.id}/${data.param.token}`, data);
        dispatch({ type: "AUTH", payload: { userData: res.data, token: res.data.accessToken } });
        localStorage.setItem("islogin", true);
        dispatch({ type: "NOTIFY", payload: { success: "Thành công", isLogin: true } });
    } catch (error) {
        dispatch({ type: "NOTIFY", payload: { error: "failed" } });
    }
};
