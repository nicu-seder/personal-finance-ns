import UserActionTypes from "./user.action.types";

const INITIAL_STATE = {
    currentUser:null
};

const userReducer = (state=INITIAL_STATE, action)=>{
    switch (action.type) {
        case UserActionTypes.GOOGLE_SIGN_IN:
            return {
                ...state,
                currentUser: action.payload
            };
        case UserActionTypes.SIGN_UP:
            return {
                ...state,
                currentUser: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;