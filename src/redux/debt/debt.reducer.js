import DebtActionTypes from "./debt.action.types";

const INITIAL_STATE = {
    debts: null,
    debtFormVisible: false
};

const debtReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DebtActionTypes.FETCH_DEBTS:
            return {
                ...state,
                debts: action.payload
            };
        case DebtActionTypes.TOGGLE_ON_DEBT_FORM:
            return {
                ...state,
                debtFormVisible: true
            };
        case DebtActionTypes.TOGGLE_OFF_DEBT_FORM:
            return {
                ...state,
                debtFormVisible: false
            };
        default:
            return {
                ...state
            }
    }
};

export default debtReducer;