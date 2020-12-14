import {createSelector} from "reselect";

const selectExpensesCategory = (state) => state.expenses;

export const selectExpensesCategoryFormStatus = createSelector(
    [selectExpensesCategory],
    expenses => expenses.expensesCategoryFormVisible
);

export const selectTransactionFormStatus = createSelector(
    [selectExpensesCategory],
    expenses => expenses.transactionFormVisible
);

export const selectExpensesCategories = createSelector(
    [selectExpensesCategory],
    (expenses) => expenses ? expenses.expensesCategories : null
);

export const selectTransactions = createSelector(
    [selectExpensesCategory],
    (expenses) => expenses ? expenses.transactions : null
);

export const getSelectedExpenseCategory = createSelector(
    [selectExpensesCategory],
    expenses => expenses ? expenses.selectedExpenseCategory : null
);