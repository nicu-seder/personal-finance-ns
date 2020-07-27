import styled, {css, keyframes} from "styled-components";
import {ReactComponent as UtilitiesSvg} from "../../assets/utilities.svg";
import {ReactComponent as DebtsSvg} from "../../assets/debt.svg";

const fadeInLeft = keyframes`
  from {
        opacity: 0;
        margin-left:-100%;
  }

  to {
        opacity: 1;
        margin-left:0%;
  }
`;

const fadeOutLeft = keyframes`
  from {
        opacity: 1;
        margin-left:0%;
  }

  to {
        opacity: 0;
        margin-left:-100%;
  }
`;

const fadeInCss = css`
        animation:${fadeInLeft} 0.3s forwards;
`;

const fadeOutCss = css`
        animation:${fadeOutLeft} 0.3s forwards;

`;

export const NavDrawerContainer = styled.div`
    display:flex;
    flex-direction:column;
    position:absolute;
    width:70px;
    height:100vh;
    top:54px;
    align-items:center;
    left: 0;
    z-index: 5;
    box-shadow: 0px 5px 5px 0px #646973;
    background-color:white;
    border-radius: 5px;
    ${props => props.closed ? fadeOutCss : fadeInCss}
`;

export const NavDrawerCloseButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
  margin-right: 10px;
  margin-top: 5px;
  color: #EC0016;
  font-weight: bolder;
  font-size: 20px;
  margin-top: 20px;
`;

export const NavDrawerOption = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 15px;
`;

export const NavDrawerOptions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  justify-content: space-between;
`;


export const NavDrawerUtilitiesLogo = styled(UtilitiesSvg)`
  width: 94%;
  height: 38px;
  cursor: pointer;
`;

export const NavDrawerDebtsLogo = styled(DebtsSvg)`
  width: 94%;
  height: 38px;
  cursor: pointer;
`;

export const NavDrawerUtilitiesVerticalLine = styled.div`
  height: 100%;
  width: 6%;
  ${props => props.utilitiesPageSelected ? pageSelected : pageNotSelected}
`;

export const NavDrawerDebtsVerticalLine = styled.div`
  height: 100%;
  width: 6%;
  ${props => props.debtsPageSelected ? pageSelected : pageNotSelected}
`;

const pageSelected = css`
  background-color: #005F6A;
`;

const pageNotSelected = css`
  background-color: white;
`;