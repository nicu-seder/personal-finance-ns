import styled, {css, keyframes} from "styled-components";
import {ReactComponent as UtilitiesSvg} from "../../assets/utilities.svg";
import {ReactComponent as DebtsSvg} from "../../assets/money.svg";
import {ReactComponent as ExpensesSvg} from "../../assets/credit-card.svg";

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
    ${props => props.closed ? fadeInCss : fadeOutCss}
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
  flex-direction: column;
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
  width: 100%;
  height: 38px;
  cursor: pointer;
`;

export const NavDrawerExpensesLogo = styled(ExpensesSvg)`
  width: 100%;
  height: 38px;
  cursor: pointer;
`;

export const NavDrawerUtilitiesVerticalLine = styled.div`
  margin-top: 5px;
  height: 2px;
  width: 90%;
  ${props => props.utilitiesPageSelected ? pageSelected : pageNotSelected}
`;

export const NavDrawerDebtsVerticalLine = styled.div`
  margin-top: 5px;
  height: 2px;
  width: 90%;
  ${props => props.debtsPageSelected ? pageSelected : pageNotSelected}
`;

const pageSelected = css`
  background-color: #005F6A;
`;

const pageNotSelected = css`
  background-color: white;
`;