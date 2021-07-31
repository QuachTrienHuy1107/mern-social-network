import { Route, Redirect } from "react-router-dom";

const PrivateRouter = (props) => {
    const firstLogin = localStorage.getItem("isLogin");
    return firstLogin ? <Route {...props} /> : <Redirect to="/login" />;
};

export default PrivateRouter;
