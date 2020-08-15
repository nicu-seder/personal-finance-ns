import styled from "styled-components";

export const DebtCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height:150px;
  width: 350px;
  box-shadow:0 1px 4px rgba(0,0,0,0.21), 0 0 40px rgba(0,0,0,0.1) inset;
  border-radius: 5px;
  margin: 10px;
  margin-top: 20px;
`;

export const DebtCardElements = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 98%;
  margin-left: 12px;
`;

export const DebtCardAmount = styled.div`
  color:#3c4660;
  font-size: 30px;
  font-weight: bold;
  margin-top: 10px;
  font-family: 'Open Sans Condensed', sans-serif;
`;

export const DebtCardHLine = styled.div`
  width: 100%;
  height: 2%;
  background-color: ${props=>props.color};
`;

export const DebtCardTitle = styled.div`
    color: #646973;
    margin-top: 10px;
    font-family: 'Open Sans Condensed', sans-serif;
`;

export const DebtCardSubTitle = styled.div`
    color: #878C96;
    font-family: 'Open Sans Condensed', sans-serif;
`;