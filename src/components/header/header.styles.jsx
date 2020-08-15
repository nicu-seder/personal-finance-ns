import styled from 'styled-components';
import {Link} from "react-router-dom";
import {ReactComponent as BurgerIcon} from "../../assets/menu.svg";

export const HeaderContainer = styled.div`
    width:100%; // of window's width
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #99C8CE;
    align-items: center;
    align-content: center;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 50px;
    justify-content: flex-start;
    align-items: center;
`;

export const HeaderLogo = styled.img`
    height: 80%;
    width: 80%;
    padding: 5px;
`;

export const HeaderTitle = styled.div`
  font-family: 'Open Sans Condensed', sans-serif;
  color: white;
  font-size: 25px;
  font-weight: bold;
`;

export const OptionsContainer = styled.div`
    height: 100%;
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 5px;
    align-items: center;
    
`;

export const Option = styled(Link)`
    padding: 5px;
    font-family: 'Open Sans Condensed', sans-serif;
    text-decoration: none;
    color: #005F6A;
`;

export const MenuIcon = styled(BurgerIcon)`
  height: 25px;
  width: 25px;
  cursor: pointer;
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 23px;
`;

