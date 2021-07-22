import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Notify from "./components/notify/Notify";
import Discover from "./pages/discover";
import HomePage from "./pages/homepage";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Register from "./pages/register";
import PageRender from "./router/PageRender";
function App() {
    const { auth } = useSelector((state) => state);
    console.log({ auth });
    return (
        // <div>
        //     <Notify />
        //     <Route path="/" exact component={HomePage} />
        //     <Route path="/login" exact component={auth.userData.accessToken ? HomePage : Login} />
        //     <Route path="/register" exact component={Register} />
        //     <Route path="/profile" exact component={Profile} />
        //     <Route path="/discover" exact component={Discover} />
        // </div>

        <Router>
            <div className="App">
                <div className="main">
                    <Route exact path="/" component={auth.userData.accessToken ? HomePage : Login} />

                    <Route exact path="/:page" component={PageRender} />
                    <Route exact path="/:page/:id" component={PageRender} />
                </div>
            </div>
        </Router>
    );

    // <Login exact component={login} />
}

export default App;
