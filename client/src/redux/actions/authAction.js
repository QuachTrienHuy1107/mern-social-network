import axios from "axios";

export const TYPES = {
    AUTH: "AUTH",
};

export const login = (data) => async (dispatch) => {
    try {
        dispatch({ type: "NOTIFY", payload: { loading: true } });
    } catch (error) {
        console.log(error);
    }
};
