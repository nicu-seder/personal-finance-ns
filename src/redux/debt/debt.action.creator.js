import DebtActionTypes from "./debt.action.types";

export const toggleOnDebtForm = ()=>{
    return {
        type:DebtActionTypes.TOGGLE_ON_DEBT_FORM
    }
};

export const toggleOffDebtForm = ()=>{
    return {
        type:DebtActionTypes.TOGGLE_OFF_DEBT_FORM
    }
};

export const fetchDebts = (debts)=>{
    return {
        type:DebtActionTypes.FETCH_DEBTS,
        payload:debts
    }
};