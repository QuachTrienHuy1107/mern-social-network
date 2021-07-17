import { combineReducers } from "redux";
import addUsersReducer from "./addUser";

const rootReducer = combineReducers({
    addUsers: addUsersReducer,
});

export default rootReducer;
