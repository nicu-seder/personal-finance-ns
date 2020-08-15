import SelectedPagesActionTypes from "./selected_pages.action.types";

const INITIAL_STATE = {
    utilitiesPageSelected: false,
    debtsPageSelected: false,
    expensesPageSelected: false,
    pageTitle: ''
};

const selectedPagesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SelectedPagesActionTypes.UTILITIES_SELECTED:
            return {
                ...state,
                utilitiesPageSelected: true,
                debtsPageSelected: false,
                expensesPageSelected: false,
                pageTitle: action.payload
            };
        case SelectedPagesActionTypes.DEBTS_SELECTED:
            return {
                ...state,
                utilitiesPageSelected: false,
                expensesPageSelected: false,
                debtsPageSelected: true,
                pageTitle: action.payload
            };
        case SelectedPagesActionTypes.EXPENSES_SELECTED:
            return {
                ...state,
                utilitiesPageSelected: false,
                debtsPageSelected: false,
                expensesPageSelected: true,
                pageTitle: action.payload
            };
        case SelectedPagesActionTypes.MAIN_MENU_SELECTED:
            return {
                ...state,
                utilitiesPageSelected: false,
                debtsPageSelected: false,
                expensesPageSelected: false,
                pageTitle: action.payload
            };
        default:
            return {
                ...state
            };
    }
};

export default selectedPagesReducer