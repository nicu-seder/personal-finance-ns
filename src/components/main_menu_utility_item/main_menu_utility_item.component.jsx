import React from "react";

//Import components
import CalendarIcon from "../calendar_icon/calendar_icon.component";

//Import from Router
import {Link} from "react-router-dom";

//Import styles
import {
    MainMenuUtilityItemContainer,
    MainMenuUtilityItemOptions,
    MainMenuUtilityLogo,
    MainMenuUtilityItemTitle,
    MainMenuUtilityItemHLine
} from "./main_menu_utility_item.styles";

const MainMenuUtilityItem = ({title}) => {
    return (
        <MainMenuUtilityItemContainer>
            <MainMenuUtilityItemOptions>
                <MainMenuUtilityItemTitle>{title}</MainMenuUtilityItemTitle>
                <CalendarIcon/>
            </MainMenuUtilityItemOptions>
            <MainMenuUtilityItemHLine/>
            <Link to={'/utilities_page'}>
                <MainMenuUtilityLogo/>
            </Link>
        </MainMenuUtilityItemContainer>
    );
};

export default MainMenuUtilityItem;