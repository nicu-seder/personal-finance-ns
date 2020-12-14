import React from "react";

//import styles
import {TransactionContainer, TransactionDate, TransactionItem, TransactionInfoContainer, TransactionName, TransactionCategory, TransactionAmount} from "./transaction.styles";

const Transaction = ({date, name, description, value}) => {
    return (
        <TransactionContainer>
            <TransactionDate>{date}</TransactionDate>
            <TransactionItem>
                <TransactionInfoContainer>
                    <TransactionName>{name}</TransactionName>
                    <TransactionCategory>{description}</TransactionCategory>
                </TransactionInfoContainer>
                <TransactionAmount>{value}</TransactionAmount>
            </TransactionItem>
        </TransactionContainer>
    )
};

export default Transaction;