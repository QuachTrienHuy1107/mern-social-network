// api/axiosClient.js
import axios from "axios";
import queryString from "query-string";
import ENDPOINT from "./endpoint";
// Set up default config for http requests here

// Please have a look at here `https://github.com/axios/axios#request-config` for the full list of configs

const apiCallStack = [];

const axiosClient = axios.create({
    baseURL: ENDPOINT.BASE_URL,

    paramsSerializer: (params) => queryString.stringify(params),
});
//** */
// auth
//** */
axiosClient.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        apiCallStack.push(config.url);
        const headers = {
            "content-type": "application/json",
        };
        config.headers.common = headers;
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

//** */
axiosClient.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        const apiCallIndex = apiCallStack.indexOf(response.config.url);
        if (apiCallIndex !== -1) {
            apiCallStack.splice(apiCallIndex, 1);
        }
        return response;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        const apiCallIndex = apiCallStack.indexOf(error.config.url);
        if (apiCallIndex !== -1) {
            apiCallStack.splice(apiCallIndex, 1);
        }
        return Promise.reject(error);
    }
);
export default axiosClient;
