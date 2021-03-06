import styled from "styled-components";
import {ReactComponent as Logo} from "./../../assets/engie.svg";

export const UtilityContainer = styled.div`
  width: 590px;
  height: 300px;
  display: flex;
  flex-direction: column;
  flex-flow: wrap;
  margin: 30px;
  //box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  background-color: #fbfdff;
  border-bottom: 1px solid #99C8CE ;
  border-radius: 10px 10px 5px 5px;
`;

export const UtilityDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fbfdff;
  width: 100%;
  //height: 40px;
  //border-radius: 5px 5px 0px 0px;
`;

export const UtilityCloseEdit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  font-family: 'Open Sans Condensed', sans-serif;
  &:hover{
  
  }
`;

export const UtilityCalendar = styled.div`
  display: flex;
  flex-direction: row;
  //justify-content: space-between;
  flex-wrap: wrap;
  padding: 5px;
`;

export const UtilityTitle = styled.div`
  color: #167D86;
  margin-left: 8px;
  font-size: 20px;
  font-family: 'Open Sans Condensed', sans-serif;
`;

export const UtilityLogoContainer = styled.div`
  display: flex;
`;

export const UtilityLogo = styled(Logo)`
  height: 25px;
  width: 25px;
  margin-left: 8px;
`;

export const UtilityWindowClose = styled.div`
  padding-left: 12px;
  cursor: pointer;
  margin-right: 10px;
  margin-top: 5px;
  color: #167D86 ;
    font-size: 20px;
  font-family: 'Open Sans Condensed', sans-serif;
`;

export const UtilityWindowEdit = styled.div`
  padding-left: 12px;
  cursor: pointer;
  margin-right: 10px;
  margin-top: 5px;
  color: #167D86;
  font-size: 20px;
  font-family: 'Open Sans Condensed', sans-serif;
`;

export const UtilityItemHLine = styled.div`
  border-top: 1px solid #ff69b4;
  width: 100%;
`;
export const UtilityItemVLine = styled.div`
  border-right: 1px solid #D7DCE1  ;
  height: 55%;
  margin-right: 15px;
`;

export const UtilityItemIndexPeriodLegend = styled.div`
  height: 8px; 
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  padding: 5px;
`;

export const UtilityItemIndexPeriodLegendColor = styled.div`
  height: 15px;
  width: 30px;
  display: flex;
  background-color: #5DB1B9;
  align-content: center;
`;

export const UtilityItemIndexPeriodLegendTitle= styled.h3`
  color: #878C96;
  padding-left: 5px;
  font-family: 'Open Sans Condensed', sans-serif;
`;

export const UtilityItemPaymentDeadlineLegend = styled.div`
height: 8px;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  padding: 5px;
`;

export const UtilityItemPaymentDeadlineLegendColor = styled.div`
  height: 15px;
  width: 30px;
  display: flex;
  background-color: #EC0016;
  //box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  align-content: center;
`;

export const UtilityItemPaymentDeadlineLegendTitle= styled.h3`
  color: #878C96;
  padding-left: 5px;
  font-family: 'Open Sans Condensed', sans-serif;
`;

export const UtilityInvoiceDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
    margin-left: 8px;
`;

export const UtilityItemClientCode = styled.div`
  display: flex;
  color:#878C96;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 16px;
  margin-right: 5px;
`;

export const UtilityItemAddress = styled.div`
  display: flex;
  color:#878C96;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 16px;
`;

export const UtilityInformationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UtilityItemClientInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UtilityItemClientInfoTitle = styled.div`
  color:#878C96;
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: bold;
  font-size: 16px;
`;




