import { TYPES } from "../actions/authAction";

const initialState = {
    userData: [],
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.AUTH:
            const newUserData = [...state.userData];
            newUserData.push(action.payload);
            return {
                ...state,
                userData: newUserData,
            };

        default:
            return state;
    }
};
export default authReducer;
