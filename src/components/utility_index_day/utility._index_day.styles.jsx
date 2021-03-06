import styled, {css} from "styled-components";

const getDayStyle = (props)=>{
    if(props.isIndexDay){
        return indexDay;
    }
    if(props.isDeadlineDay){
        return deadlineDay;
    }
    return normalDay;
};

const indexDay = css`
  background-color: #5DB1B9;
  color: white;
`;

const deadlineDay = css`
background-color: #EC0016;
color: white;
`;

const normalDay = css`
  color: #878C96;
`;

export const UtilityIndexDayContainer = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  height: 40px;
  width: 40px;
  border-radius: 300px;
  font-size: 26px;
  font-weight: bold;
  margin: 1px;
  ${getDayStyle}
`;

export const UtilityIndexDayValue =  styled.div`
  width: 100%;
  height: 100%;
  align-self: center;
  text-align: center;
  margin-top: 4px;
  font-family: 'Open Sans Condensed', sans-serif;
`;