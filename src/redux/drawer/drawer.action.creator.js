import DrawerActionTypes from "./drawer.action.types";

export const closeDrawer = ()=>{
    return {
        type:DrawerActionTypes.DRAWER_HIDDEN
    }
};

export const openDrawer = ()=>{
    return {
        type:DrawerActionTypes.DRAWER_VISIBLE
    }
};