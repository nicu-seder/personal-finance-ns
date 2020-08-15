import React from "react";

//import styles
import {
    DebtCardContainer,
    DebtCardAmount,
    DebtCardHLine,
    DebtCardElements,
    DebtCardSubTitle,
    DebtCardTitle
} from "./debt_card.styles";


const DebtCard = ({value, color, title, subtitle}) => {


    return (
        <DebtCardContainer>
            <DebtCardElements>
                <DebtCardAmount>{value}</DebtCardAmount>
                <DebtCardTitle>{title}</DebtCardTitle>
                <DebtCardSubTitle>{subtitle}</DebtCardSubTitle>
            </DebtCardElements>
            <DebtCardHLine color={color}/>
        </DebtCardContainer>
    )
};

export default DebtCard;