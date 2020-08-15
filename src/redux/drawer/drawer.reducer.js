import DrawerActionTypes from "./drawer.action.types";

const INITIAL_STATE = {
    drawerState: false
};

const drawerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DrawerActionTypes.TOGGLE_DRAWER:
            return {
                ...state,
                drawerClosed: !state.drawerClosed
            };
        case DrawerActionTypes.CLOSE_DRAWER:
            return {
                ...state,
                drawerClosed: false
            };
        default:
            return {
                ...state
            }
    }
};

export default drawerReducer