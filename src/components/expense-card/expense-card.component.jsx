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
    ExpenseCardHLineSelected
} from "./expense-card.styles";

//import firebase
import {selectExpenseCategoryFirestore} from "../../firebase/firebase.utils";

const ExpenseCard = ({title, color, is_selected, currentUser}) => {
    const {uid} = currentUser;

    const selectExpenseCategory = () => {
        selectExpenseCategoryFirestore(uid, title);
    };

    return (
        <ExpenseCardContainer onClick={selectExpenseCategory}>
            <ExpenseCardRectangle color={color}>
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

export default connect(mapStateToProps, null)(ExpenseCard);