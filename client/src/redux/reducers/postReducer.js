import { TYPES } from "../actions/postAction";

const initialState = {
    page: 2,
    result: 0,
    postLists: [],
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.GET_POSTS:
            return {
                ...state,
                postLists: action.payload.postList,
            };
        default:
            return state;
    }
};
export default postReducer;
