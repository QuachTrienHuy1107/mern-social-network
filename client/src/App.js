import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/login";
import Register from "./pages/register";
import HomePage from "./pages/homepage";
import { Route, Link } from "react-router-dom";
import Profile from "./pages/profile";
import Header from "./components/header/header";
import Discover from "./pages/discover";

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
