import ExpensesActionTypes from "./expenses.action.types";

const INITIAL_STATE = {
    expensesCategoryFormVisible: false,
    transactionFormVisible: false,
    expensesCategories: null,
    transactions: null,
    selectedExpenseCategory: null
};

const expenseCategoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ExpensesActionTypes.TOGGLE_ON_EXPENSE_CATEGORY_FORM:
            return {
                ...state,
                expensesCategoryFormVisible: true
            };
        case ExpensesActionTypes.TOGGLE_OFF_EXPENSE_CATEGORY_FORM:
            return {
                ...state,
                expensesCategoryFormVisible: false
            };
        case ExpensesActionTypes.FETCH_EXPENSES_CATEGORY:
            return {
                ...state,
                expensesCategories: action.payload
            };
        case ExpensesActionTypes.FETCH_TRANSACTIONS:
            return {
                ...state,
                transactions: action.payload
            };
        case ExpensesActionTypes.TOGGLE_ON_TRANSACTION_FORM:
            return {
                ...state,
                transactionFormVisible: true
            };
        case ExpensesActionTypes.TOGGLE_OFF_TRANSACTION_FORM:
            return {
                ...state,
                transactionFormVisible: false
            };
        case ExpensesActionTypes.EXPENSE_CATEGORY_SELECTED_NAME:
            return {
                ...state,
                selectedExpenseCategory: action.payload
            };
        default:
            return {
                ...state
            };
    }
};

export default expenseCategoryReducer;