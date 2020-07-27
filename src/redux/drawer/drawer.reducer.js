import DrawerActionTypes from "./drawer.action.types";

const INITIAL_STATE = {
    drawerClosed: true
};

const drawerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DrawerActionTypes.DRAWER_VISIBLE:
            return {
                ...state,
                drawerClosed: false
            };
        case DrawerActionTypes.DRAWER_HIDDEN:
            return {
                ...state,
                drawerClosed: true
            };
        default:
            return {
                ...state
            }
    }
};

export default drawerReducer