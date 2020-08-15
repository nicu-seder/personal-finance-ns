import DrawerActionTypes from "./drawer.action.types";

export const closeDrawer = ()=>{
    return {
        type:DrawerActionTypes.CLOSE_DRAWER
    }
};

export const toggleDrawer = ()=>{
    return {
        type:DrawerActionTypes.TOGGLE_DRAWER
    }
};