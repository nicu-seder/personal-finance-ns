import {createSelector} from "reselect";

const selectDebt = (state) => state.debt;

export const selectDebtFormStatus = createSelector(
    [selectDebt],
    debt => debt.debtFormVisible
);

export const selectDebtList = createSelector(
    [selectDebt],
    debt => debt ? debt.debts : null
);