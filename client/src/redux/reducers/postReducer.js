import { TYPES } from "../actions/postAction";

const initialState = {};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.GET_POSTS:
            return action.payload;

        default:
            return state;
    }
};
export default authReducer;
