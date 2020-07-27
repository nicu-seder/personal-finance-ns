import {createSelector} from "reselect";

const selectDrawer = (state) => state.drawer;

export const selectDrawerState = createSelector(
    [selectDrawer],
    drawer => drawer.drawerClosed
);