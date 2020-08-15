import styled from "styled-components";

export const DebtWindowContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 500px;
  border: 1px solid dimgrey;
  background-color: white;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
`;

export const DebtFormContainer = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;
`;

export const DebtWindowHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const DebtWindowClose = styled.div`
  padding-left: 12px;
  cursor: pointer;
  margin-right: 8px;
  margin-top: 5px;
`;

