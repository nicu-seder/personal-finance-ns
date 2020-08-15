import styled, {css} from "styled-components";

export const DebtItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  height: 80%;
  width: 150px;
  cursor: pointer;
  margin-right: 5px;
  border-radius: 3px;
  ${props=>props.selected?itemSelected:null}
`;

export const DebtItemTitle = styled.div`
  color: #005F6A;
  margin-top: 10px;
  font-family: 'Open Sans Condensed', sans-serif;
`;

export const TopHorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #005F6A;
`;

const itemSelected = css`
  background-color: #F0F3F5;
`;

