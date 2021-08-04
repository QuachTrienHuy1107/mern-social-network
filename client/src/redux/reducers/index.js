import { combineReducers } from "redux";
import authReducer from "./authReducer";
import notifyReducer from "./notifyReducer";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    notify: notifyReducer,
    post: postReducer,
});

export default rootReducer;
