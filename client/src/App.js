import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router-dom";
import Discover from "./pages/discover";
import HomePage from "./pages/homepage";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Register from "./pages/register";

function App() {
    return (
        <div>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/discover" exact component={Discover} />
        </div>
    );

    // <Login exact component={login} />
}

export default App;
