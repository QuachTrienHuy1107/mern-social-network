import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { Route, Router } from "react-router-dom";
import Notify from "./components/notify/Notify";
import Discover from "./pages/discover";
import HomePage from "./pages/homepage";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Register from "./pages/register";

function App() {
    const { auth } = useSelector((state) => state);
    console.log({ auth });
    return (
        <div>
            <Notify />
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={auth.userData.accessToken ? HomePage : Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/discover" exact component={Discover} />
        </div>
    );

    // <Login exact component={login} />
}

export default App;
