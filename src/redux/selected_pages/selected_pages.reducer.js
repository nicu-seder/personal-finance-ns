import SelectedPagesActionTypes from "./selected_pages.action.types";

const INITIAL_STATE = {
    utilitiesPageSelected: false,
    debtsPageSelected: false,
    pageTitle: ''
};

const selectedPagesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SelectedPagesActionTypes.UTILITIES_SELECTED:
            return {
                ...state,
                utilitiesPageSelected: true,
                debtsPageSelected: false,
                pageTitle: action.payload
            };
        case SelectedPagesActionTypes.DEBTS_SELECTED:
            return {
                ...state,
                utilitiesPageSelected: false,
                debtsPageSelected: true,
                pageTitle: action.payload
            };
        case SelectedPagesActionTypes.MAIN_MENU_SELECTED:
            return {
                ...state,
                utilitiesPageSelected: false,
                debtsPageSelected: false,
                pageTitle: action.payload
            };
        default:
            return {
                ...state
            };
    }
};

export default selectedPagesReducer