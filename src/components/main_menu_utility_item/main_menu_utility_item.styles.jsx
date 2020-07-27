import styled from "styled-components";

//Import logos
import {ReactComponent as UtilitiesReminderLogo} from './../../assets/bill_duedate.svg';

export const MainMenuUtilityItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  position: relative;
  height: 430px;
  width: 500px;
  box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  margin-top: 20px;
  padding: 10px;
`;

export const MainMenuUtilityItemOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MainMenuUtilityItemTitle = styled.h3`
  color: #878C96;
`;

export const MainMenuUtilityItemHLine = styled.hr`
  width: 100%;
  border: 1px solid #878C96;
`;

export const MainMenuUtilityLogo = styled(UtilitiesReminderLogo)`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-top: 10px;
  margin-left: 40px;
`;
