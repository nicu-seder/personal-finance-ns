import React from "react";

//Import styles
import {
    HeaderContainer,
    LogoContainer,
    HeaderLogo,
    OptionsContainer,
    Option,
    MenuIcon,
    IconsContainer,
    HeaderTitle
} from "./header.styles";

//Import  assets
import leaf_logo from '../../assets/leaf_logo.png';

//Import  firebase
import {auth} from "../../firebase/firebase.utils";

//Import  reselect
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {selectPageTitle} from "../../redux/selected_pages/selected_pages.selectors";

//import redux
import {connect} from 'react-redux';

//import components

//import actions
import {toggleDrawer} from "../../redux/drawer/drawer.action.creator";


const Header = ({currentUser, toggleDrawer, pageTitle}) => {
    return (
        <HeaderContainer>
            <IconsContainer>
                <MenuIcon onClick={toggleDrawer}/>
                <LogoContainer to={'/'}>
                    <HeaderLogo src={leaf_logo}/>
                </LogoContainer>
            </IconsContainer>
            <HeaderTitle>{pageTitle}</HeaderTitle>
            <OptionsContainer>
                {
                    currentUser ?
                        <Option onClick={() => auth.signOut()} to={'/'}>SIGN OUT</Option> :
                        <Option to={'/signin'}>SIGN IN</Option>
                }
                {/*<div>{currentUser? currentUser.email:null}</div>*/}
            </OptionsContainer>
        </HeaderContainer>
    )
};

const mapStateToProps = createStructuredSelector(
    {
        currentUser: selectCurrentUser,
        pageTitle:selectPageTitle
    }
);

const mapDispatchToProps = dispatch=>{
    return {
        toggleDrawer:()=>dispatch(toggleDrawer())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);