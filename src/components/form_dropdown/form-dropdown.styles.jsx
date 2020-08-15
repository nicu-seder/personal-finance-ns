import styled, {css} from "styled-components";

const isRed = css`
    background-color: white;
    color: #EC0016;
    //&:hover {
    //background-color:white;
    //color:#167D86 ;
    //border:1px solid #167D86;
    //}
`;

const isNotRed = css`
    background-color: white;
    color: #167D86;
    //&:hover {
    //background-color:white;
    //color:#167D86 ;
    //border:1px solid #167D86;
    //}
`;

const getDropdownStyles = (props) => {
    if (props.isRed) {
        return isRed;
    }
    return isNotRed;
};

export const FormDropdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const FormDropdownText = styled.p`
  color:#878C96;
  margin: 0;
  font-size: 15px;
  width: 70%;
  font-family: 'Open Sans Condensed', sans-serif;
`;

export const FormDropdownElement = styled.select`
    //color:#167D86;
    //background-color: white;
    border: 1px solid;
    border-bottom-color: #D7DCE1;
    border-radius: 3px;
    margin-top: 5px;
    height: 30px;
    width:30%;
    font-weight: bold;
    font-size: 15px;
    font-family: 'Open Sans Condensed', sans-serif;
    ${getDropdownStyles};
`;