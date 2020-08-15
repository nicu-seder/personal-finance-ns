import styled from "styled-components";
import {ReactComponent as ExpenseLogo} from "./../../assets/dollar.svg";

const getExpanseColor = (props)=>{
    if(props.color){
        return props.color;
    }
    return '#167D86'
};

export const ExpenseCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80px;
  width: 80px;
  align-items: center;
  margin-top: 28px;
`;

export const ExpenseCardRectangle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${getExpanseColor};
  width: 70px;
  height: 70px;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
`;

export const ExpenseCardLogo = styled(ExpenseLogo)`
  width: 45px;
  height: 45px;
`;

export const ExpenseCardTitle = styled.div`
  font-size: 14px;
  font-family: 'Open Sans Condensed', sans-serif;
`;

export const ExpenseCardHLineSelected = styled.div`
  height: 3px;
  width: 75%;
  background-color: ${props=>props.color};
  margin-top: 3px;
`;

