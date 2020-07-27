import {combineReducers} from "redux";

import utilityReducer from "./utility/utility.reducer";
import userReducer from "./user/user.reducer";
import drawerReducer from "./drawer/drawer.reducer";
import selectedPagesReducer from "./selected_pages/selected_pages.reducer";

const rootReducer = combineReducers(
    {
        'user':userReducer,
        'utility':utilityReducer,
        'drawer':drawerReducer,
        'selectedPages':selectedPagesReducer
    }
);

export default rootReducer;