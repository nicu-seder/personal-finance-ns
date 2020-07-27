import React, {useEffect} from "react";
import {connect} from 'react-redux';

//Import styles
import {MainMenuPageContainer, MainMenuLogo} from "./main_menu_page.styles";

//import actions
import {isSelectedMainMenu} from "../../redux/selected_pages/selected_pages.action.creator";


const MainMenuPage = ({selectMainMenuPage}) => {

    useEffect(() => {
        selectMainMenuPage('');
    }, [selectMainMenuPage]);

    return (
        <MainMenuPageContainer>
            <MainMenuLogo/>
        </MainMenuPageContainer>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        selectMainMenuPage: (title) => dispatch(isSelectedMainMenu(title))
    }
};

export default connect(null, mapDispatchToProps)(MainMenuPage);