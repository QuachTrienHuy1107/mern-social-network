import { lazy } from "react";
// router
const Login = lazy(() => import("../pages/login"));
const Register = lazy(() => import("../pages/register"));

const routes = [
    // Common
    {
        path: "/login",
        exact: true,
        component: Login,
    },
    {
        path: "/register",
        exact: true,
        component: Register,
    },
];
export default routes;
