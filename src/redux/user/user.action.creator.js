import UserActionTypes from "./user.action.types";

export const googleSignIn = (user)=>{
    return {
        type:UserActionTypes.GOOGLE_SIGN_IN,
        payload:user
    }
};

export const signUp = (user)=>{
    return {
        type:UserActionTypes.SIGN_UP,
        payload:user
    }
};