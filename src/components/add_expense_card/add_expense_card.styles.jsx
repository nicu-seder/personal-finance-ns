import styled  from "styled-components";
import {ReactComponent as AddExpenseLogo} from "./../../assets/plus.svg";


export const AddExpenseCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90px;
  width: 80px;
  align-items: center;
  margin-top: 28px;
`;

export const AddExpenseCardRectangle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 70px;
  height: 70px;
  align-items: center;
  border: 1px solid #D7DCE1  ;
  border-radius: 8px;
  cursor: pointer;
`;

export const AddExpenseCardLogo = styled(AddExpenseLogo)`
  width: 18px;
  height: 18px;
  font-family: 'Open Sans Condensed', sans-serif;
`;

export const AddExpenseCardTitle = styled.div`
  font-size: 14px;
  font-family: 'Open Sans Condensed', sans-serif;
`;
