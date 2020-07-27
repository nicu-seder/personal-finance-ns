import styled from "styled-components";

export const UtilityWindowContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 390px;
  border: 1px solid dimgrey;
  background-color: white;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 150px;
`;

export const UtilityFormContainer = styled.form`
  padding: 10px;
`;

export const UtilityWindowHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const UtilityWindowClose = styled.div`
  padding-left: 12px;
  cursor: pointer;
  margin-right: 8px;
  margin-top: 5px;
`;