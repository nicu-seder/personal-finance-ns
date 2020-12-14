import styled from "styled-components";
import {ReactComponent as UserLogo} from "./../../assets/user.svg";
import {ReactComponent as AddSign} from "./../../assets/plus.svg";
import {ReactComponent as TransactionIcon} from "./../../assets/credit_card.svg";

export const ExpensesPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #fbfbfb;
  width: 95%;
  height: 850px;
  margin: 20px;
  border-radius: 10px;
  align-items: center;
`;

export const ExpensesMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 50%;
  height: 95%;
  margin-left: 30px;
`;

export const ExpensesUserDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ExpensesUserDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #5DB1B9   ;
`;

export const ExpensesUserIcon = styled(UserLogo)`
  height: 50px;
  width: 50px;
`;

export const ExpensesAddIncomeLogo = styled(AddSign)`
  height: 25px;
  width: 25px;
  margin-right: 50px;
  cursor: pointer;
`;

export const TransactionAddLogo = styled(AddSign)`
  height: 25px;
  width: 25px;
  margin-right: 50px;
  cursor: pointer;
  margin-top: 25px;
`;

export const ExpensesIncomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 12px;
`;

export const ExpensesUserName = styled.div`
  color: #878C96 ;
  font-size: 16px;
  font-family: 'Open Sans Condensed', sans-serif;
`;

export const ExpensesUserIncome = styled.div`
  color: #646973  ;
  font-size: 20px;
  font-family: 'Open Sans Condensed', sans-serif;
`;

export const HorizontalLine = styled.div`
  width: 95%;
  height: 1px;
  background-color: #D7DCE1 ;
  margin-top: 10px;
`;


export const ExpensesGridContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 20px;
`;


export const ExpensesTransactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 50%;
  height: 95%; 
  background-color: #f1f3f6;;
  border-radius: 10px;
  margin-right: 20px;
`;

export const ExpensesTransactionLogo = styled(TransactionIcon)`
  width: 100%;
  height: 250px;
  margin-top: 15px;
`;

export const ExpensesTransactionTitle = styled.div`
  display: flex;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 28px;
  color: #646973 ;
  margin-top: 20px;
  margin-left: 20px;
`;

export const ExpensesTransactionDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;