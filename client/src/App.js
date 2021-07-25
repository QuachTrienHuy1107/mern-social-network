import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Notify from "./components/notify/Notify";
import Discover from "./pages/discover";
import Forgotpassword from "./pages/forgotpassword";
import HomePage from "./pages/homepage";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Register from "./pages/register";
import { refreshToken } from "./redux/actions/authAction";
import PageRender from "./router/PageRender";

function App() {
    const { auth } = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(refreshToken());
    }, []);
    return (
        <div>
            <Notify />
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/forgotpassword" exact component={Forgotpassword} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/discover" exact component={Discover} />
        </div>

        // <Router>
        //     <div className="App">
        //         <div className="main">
        //             <Route exact path="/" component={auth.token ? HomePage : Login} />

        //             <Route exact path="/:page" component={PageRender} />
        //             <Route exact path="/:page/:id" component={PageRender} />
        //         </div>
        //     </div>
        // </Router>
    );
}

export default App;
