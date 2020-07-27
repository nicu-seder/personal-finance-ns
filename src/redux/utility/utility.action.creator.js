import UtilityActionTypes from "./utility.action.types";

export const toggleOnUtilityForm = ()=>{
    return {
        type:UtilityActionTypes.TOGGLE_ON_UTILITY_FORM
    }
};

export const toggleOffUtilityForm = ()=>{
    return {
        type:UtilityActionTypes.TOGGLE_OFF_UTILITY_FORM
    }
};

export const fetchUtilities = (utilites)=>{
    return {
        type:UtilityActionTypes.FETCH_UTILITIES,
        payload:utilites
    }
};

export const deleteUtility = ()=>{
    return {
        type:UtilityActionTypes.DELETE_UTILITY
    }
};

export const updateUtilities = (list_of_utilities)=>{
    return {
        type:UtilityActionTypes.UPDATE_UTILITIES,
        payload:list_of_utilities
    }
};