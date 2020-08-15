import ExpensesActionTypes from "./expenses.action.types";

const INITIAL_STATE = {
    expensesCategoryFormVisible: false,
    expensesCategories: null
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
        default:
            return {
                ...state
            };
    }
};

export default expenseCategoryReducer;