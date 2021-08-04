import axiosClient from "./axiosClient";

class LoginApi {
    getAll = () => {
        const url = "/auth/login";
        return axiosClient.post(url);
    };
}
const loginApi = new LoginApi();
export default loginApi;
