import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

// initialState
const initialState = {};

// Create store
const store = createStore(rootReducer, initialState);
