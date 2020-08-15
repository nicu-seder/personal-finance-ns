import ExpensesActionTypes from "./expenses.action.types";

export const toggleOnExpensesCategoryForm = ()=>{
    return{
        type:ExpensesActionTypes.TOGGLE_ON_EXPENSE_CATEGORY_FORM
    }
};

export const toggleOffExpensesCategoryForm = ()=>{
    return{
        type:ExpensesActionTypes.TOGGLE_OFF_EXPENSE_CATEGORY_FORM
    }
};

export const fetchExpensesCategory = (expenses_categories)=>{
    return {
        type:ExpensesActionTypes.FETCH_EXPENSES_CATEGORY,
        payload:expenses_categories
    }
};