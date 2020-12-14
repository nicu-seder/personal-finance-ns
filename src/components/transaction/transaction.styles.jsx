import styled from "styled-components";


export const TransactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  position: relative;
  padding-bottom: 15px;
`;

export const TransactionDate = styled.div`
  display: flex;
  margin-top: 10px;
  margin-right: 50px;
  color: #878C96 ; 
  font-family: 'Open Sans Condensed', sans-serif;
  border-bottom: 1px solid #D7DCE1  ;
  font-size: 15px;
`;

export const TransactionItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const TransactionInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TransactionName = styled.div`
  display: flex;
  color:#434854;
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: bold;
`;

export const TransactionCategory = styled.div`
  display: flex;
  color: #878C96 ; 
  font-family: 'Open Sans Condensed', sans-serif;
`;

export const TransactionAmount = styled.div`
  display: flex;
  margin-right: 50px;
  color:#434854;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 20px;
  font-weight: bold;
`;
