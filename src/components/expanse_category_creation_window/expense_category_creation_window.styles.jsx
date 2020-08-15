import styled from "styled-components";

export const ExpenseCategoryCreationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 250px;
  border: 1px solid #99C8CE;
  background-color: white;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  border-radius: 5px;
`;

export const ExpenseCategoryWindowHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const ExpenseCategoryWindowClose = styled.div`
  padding-left: 12px;
  cursor: pointer;
  margin-right: 8px;
  margin-top: 5px;
`;

export const ExpenseCategoryFormContainer = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;
`;