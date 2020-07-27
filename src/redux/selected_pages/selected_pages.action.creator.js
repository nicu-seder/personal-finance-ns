import SelectedPagesActionTypes from "./selected_pages.action.types";

export const isSelectedUtilities = (title)=>{
    return {
        type:SelectedPagesActionTypes.UTILITIES_SELECTED,
        payload:title
    }
};

export const isSelectedDebts= (title)=>{
    return {
        type:SelectedPagesActionTypes.DEBTS_SELECTED,
        payload:title
    }
};

export const isSelectedMainMenu= (title)=>{
    return {
        type:SelectedPagesActionTypes.MAIN_MENU_SELECTED,
        payload:title
    }
};