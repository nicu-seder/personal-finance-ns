import styled from "styled-components";
import {ReactComponent as PersonalFinanceLogo} from '../../assets/saving_box.svg'

export const PersonalFinanceContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const PersonalFinanceImage = styled(PersonalFinanceLogo)`
    padding: 25px;
    width: 50%;
`;

export const PersonalFinanceText = styled.div`
    width: 50%;
    padding: 5px;
    margin-right: 45px;
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 30px;
    color:#878C96;
`;