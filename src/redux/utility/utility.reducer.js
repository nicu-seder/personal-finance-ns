import UtilityActionTypes from "./utility.action.types";

const INITIAL_STATE = {
    utilities: null,
    utilityFormVisible: false
};

const utilityReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UtilityActionTypes.TOGGLE_ON_UTILITY_FORM:
            return {
                ...state,
                utilityFormVisible: true
            };
        case UtilityActionTypes.TOGGLE_OFF_UTILITY_FORM:
            return {
                ...state,
                utilityFormVisible: false
            };
        case UtilityActionTypes.FETCH_UTILITIES:
            return {
                ...state,
                utilities: action.payload
            };
        case UtilityActionTypes.DELETE_UTILITY:
            return {
                ...state
            };
        case UtilityActionTypes.UPDATE_UTILITIES:
            return {
                ...state,
                utilities: action.payload
            };
        default:
            return {
                ...state
            }
    }
};

export default utilityReducer;