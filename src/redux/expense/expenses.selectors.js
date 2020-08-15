import {createSelector} from "reselect";

const selectExpensesCategory = (state) => state.expenses;

export const selectExpensesCategoryFormStatus = createSelector(
    [selectExpensesCategory],
    expenses => expenses.expensesCategoryFormVisible
);

export const selectExpensesCategories = createSelector(
    [selectExpensesCategory],
    (expenses) => expenses?expenses.expensesCategories:null
);