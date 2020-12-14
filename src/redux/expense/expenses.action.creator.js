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

export const toggleOnTransactionForm = ()=>{
    return{
        type:ExpensesActionTypes.TOGGLE_ON_TRANSACTION_FORM
    }
};

export const toggleOffTransactionForm = ()=>{
    return{
        type:ExpensesActionTypes.TOGGLE_OFF_TRANSACTION_FORM
    }
};

export const fetchExpensesCategory = (expenses_categories)=>{
    return {
        type:ExpensesActionTypes.FETCH_EXPENSES_CATEGORY,
        payload:expenses_categories
    }
};
export const fetchTransactions = (transactions)=>{
    return {
        type:ExpensesActionTypes.FETCH_TRANSACTIONS,
        payload:transactions
    }
};

export const selectExpenseCategoryName = (selectedCategoryName)=>{
    return{
        type:ExpensesActionTypes.EXPENSE_CATEGORY_SELECTED_NAME,
        payload:selectedCategoryName
    }
};