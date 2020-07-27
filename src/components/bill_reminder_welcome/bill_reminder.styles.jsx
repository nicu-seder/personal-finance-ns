import styled from "styled-components";

import {ReactComponent as BillReminderLogo} from '../../assets/payments.svg';


export const BillReminderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const BillReminderImage = styled(BillReminderLogo)`
    padding: 25px;
    width: 50%;
`;

export const BillReminderText = styled.div`
    width: 50%;
    padding: 5px;
    margin-left: 45px;
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 30px;
    color:#878C96;
`;

