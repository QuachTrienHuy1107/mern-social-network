import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/login";
import Register from "./pages/register";
import HomePage from "./pages/homepage";
import { Route, Link } from "react-router-dom";
function App() {
    return (
        <div>
            <Route path="/" component={HomePage} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </div>
    );

    // <Login exact component={login} />
}

export default App;
