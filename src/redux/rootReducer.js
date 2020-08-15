import {combineReducers} from "redux";

import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';

import utilityReducer from "./utility/utility.reducer";
import userReducer from "./user/user.reducer";
import drawerReducer from "./drawer/drawer.reducer";
import selectedPagesReducer from "./selected_pages/selected_pages.reducer";
import debtReducer from "./debt/debt.reducer";
import expenseCategoryReducer from "./expense/expenses.reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', 'utility', 'debt', 'expenses']
};

const rootReducer = combineReducers(
    {
        'user': userReducer,
        'utility': utilityReducer,
        'drawer': drawerReducer,
        'selectedPages': selectedPagesReducer,
        'debt': debtReducer,
        'expenses':expenseCategoryReducer
    }
);

export default persistReducer(persistConfig, rootReducer);