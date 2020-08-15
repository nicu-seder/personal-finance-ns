import styled from "styled-components";

export const DebtDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 450px;
  background-color: #fbfdff;
  justify-content: space-between;
  align-content: center;
  margin-top: 30px;
  border-radius: 5px;
  border-bottom: 1px solid #CAE7EA;
`;

export const DebtDetailsBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 98%;
`;

export const DebtValueInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const DebtValueTitle = styled.div`
  color:#878C96;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Open Sans Condensed', sans-serif;
`;

export const DebtValue = styled.div`
  color:#3c4660;
  font-size: 60px;
  font-weight: bold;
  font-family: 'Open Sans Condensed', sans-serif;
`;

export const DebtCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 15px;
  align-items: center;
`;

export const DebtInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 12px;
`;

export const DebtBankInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DebtBankTitle=styled.div`
  color: #646973;
  font-family: 'Open Sans Condensed', sans-serif;
`;

export const DebtBankName = styled.div`
  color:#3c4660;
  font-weight: bolder;
  font-size: 22px;
  font-family: 'Open Sans Condensed', sans-serif;
`;

export const DebtVerticalLine = styled.div`
  width: 1px;
  height: 100%;
  background-color: #D7DCE1;
  margin-left: 25px;
  margin-right: 25px;
`;

export const DebtDetailsDelete = styled.div`
  width: 2%;
  padding-left: 12px;
  cursor: pointer;
  margin-right: 10px;
  margin-top: 5px;
  color: #878C96;
  font-weight: bolder;
  font-size: 20px;
  font-family: 'Open Sans Condensed', sans-serif;
`;

