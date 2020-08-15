import React from "react";

//import styles
import {AddExpenseCardContainer, AddExpenseCardLogo, AddExpenseCardRectangle, AddExpenseCardTitle} from "./add_expense_card.styles";

const AddExpenseCard = ({handleClick})=>{
    return (
        <AddExpenseCardContainer onClick={handleClick}>
            <AddExpenseCardRectangle>
                <AddExpenseCardLogo/>
            </AddExpenseCardRectangle>
            <AddExpenseCardTitle>Add</AddExpenseCardTitle>
        </AddExpenseCardContainer>
    )
};

export default AddExpenseCard;