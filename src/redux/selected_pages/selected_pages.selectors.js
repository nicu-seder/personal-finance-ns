import {createSelector} from "reselect";

const selectSelectedPages = state => state.selectedPages

export const selectUtilitiesSelected = createSelector(
    [selectSelectedPages],
    selectedPages=>selectedPages.utilitiesPageSelected
);

export const selectDebtsSelected = createSelector(
    [selectSelectedPages],
    selectedPages=>selectedPages.debtsPageSelected
);

export const selectExpensesSelected = createSelector(
    [selectSelectedPages],
    selectedPages=>selectedPages.expensesPageSelected
);

export const selectPageTitle = createSelector(
    [selectSelectedPages],
    selectSelectedPages=>selectSelectedPages.pageTitle
);