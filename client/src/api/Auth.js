import axiosClient from "./axiosClient";

class LoginApi {
    getAll = (params) => {
        const url = "/auth/login";
        return axiosClient.post(url, { params });
    };
}
const loginApi = new LoginApi();
export default loginApi;
