import axiosClient from "./axiosClient";

const UserApi = {
    getAll: (params) => {
        const url = "/users";
        return axiosClient.get(url, { params });
    },
};
export default UserApi;
