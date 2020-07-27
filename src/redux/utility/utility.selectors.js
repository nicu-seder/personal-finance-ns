import {createSelector} from "reselect";

const selectUtility = (state) => state.utility;

export const selectUtilityFormStatus = createSelector(
    [selectUtility],
    (utility) => utility.utilityFormVisible
);

export const selectUtilityList = createSelector(
    [selectUtility],
    (utility) => utility ? utility.utilities : null
);