import styled from "styled-components";

import {ReactComponent as AnalyticsLogo} from '../../assets/data_reports.svg';


export const AnalyticsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const AnalyticsImage = styled(AnalyticsLogo)`
    padding: 25px;
    width: 50%;
`;

export const AnalyticsText = styled.div`
    width: 50%;
    padding: 5px;
    margin-right: 45px;
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 30px;
    color:#878C96;
`;
