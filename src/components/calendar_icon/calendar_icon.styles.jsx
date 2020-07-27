import styled from "styled-components";

import {ReactComponent as CalendarLogo} from './../../assets/calendar.svg';

export const CalendarIconContainer = styled.div`
  width: 42px;
  height: 42px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CalendarIconStyled = styled(CalendarLogo)`
  width: 30px;
  height: 30px;
  margin-bottom: 8px;
`;

export const BillsCount = styled.span`
    position: absolute;
    font-size: 12px;
    font-weight: bold;
    bottom: 13px;
    color: #005F6A;
`;