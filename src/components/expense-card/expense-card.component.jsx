import React from "react";
import {connect} from 'react-redux';

//import reselect
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {createStructuredSelector} from "reselect";

//import styles
import {
    ExpenseCardContainer,
    ExpenseCardLogo,
    ExpenseCardRectangle,
    ExpenseCardTitle,
    ExpenseCardHLineSelected,
    ExpenseCardCloseContainer, ExpenseCardCloseSymbol
} from "./expense-card.styles";

//import firebase
import {selectExpenseCategoryFirestore, deleteExpenseCategory} from "../../firebase/firebase.utils";

//import actions
import {selectExpenseCategoryName} from "../../redux/expense/expenses.action.creator";

const ExpenseCard = ({title, color, is_selected, currentUser, selectExpenseCategoryName}) => {
    const {uid} = currentUser;

    const selectExpenseCategory = () => {
        selectExpenseCategoryFirestore(uid, title);
        selectExpenseCategoryName(title);
    };

    return (
        <ExpenseCardContainer >
            <ExpenseCardCloseContainer>
                <ExpenseCardCloseSymbol onClick={()=>deleteExpenseCategory(uid, title)}>&#10005;</ExpenseCardCloseSymbol>
            </ExpenseCardCloseContainer>
            <ExpenseCardRectangle color={color} onClick={selectExpenseCategory}>
                <ExpenseCardLogo/>
            </ExpenseCardRectangle>
            <ExpenseCardTitle>{title}</ExpenseCardTitle>
            {
                is_selected ? <ExpenseCardHLineSelected color={color}/> : null
            }
        </ExpenseCardContainer>
    )
};

const mapStateToProps = createStructuredSelector(
    {
        currentUser: selectCurrentUser
    }
);

const mapDispatchToProps = dispatch=>{
    return{
        selectExpenseCategoryName:(expenseCategoryTitle)=>dispatch(selectExpenseCategoryName(expenseCategoryTitle))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseCard);