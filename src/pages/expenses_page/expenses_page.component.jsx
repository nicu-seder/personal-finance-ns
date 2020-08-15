import React, {useEffect, useState} from "react";
import {connect} from 'react-redux';

//import actions
import {isSelectedExpenses} from "../../redux/selected_pages/selected_pages.action.creator";
import {toggleOnExpensesCategoryForm} from "../../redux/expense/expenses.action.creator";
import {fetchExpensesCategory} from "../../redux/expense/expenses.action.creator";

//import styles
import {
    ExpensesPageContainer,
    ExpensesMenuContainer,
    ExpensesTransactionContainer,
    ExpensesUserDetails,
    ExpensesUserIcon,
    ExpensesIncomeContainer,
    ExpensesUserName,
    ExpensesUserIncome,
    HorizontalLine,
    ExpensesAddIncomeLogo,
    ExpensesUserDetailsContainer,
    ExpensesGridContainer
} from "./expenses_page.styles";

//import reselect
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {createStructuredSelector} from "reselect";
import {selectExpensesCategoryFormStatus, selectExpensesCategories} from "../../redux/expense/expenses.selectors";


//import components
import ExpenseCard from "../../components/expense-card/expense-card.component";
import AddExpenseCard from "../../components/add_expense_card/add_expense_card.component";
import ExpenseCategoryCreationWindow
    from "../../components/expanse_category_creation_window/expense_category_creation_window_component";

//import firebase
import {db, transformUtilities} from "../../firebase/firebase.utils";

//import HOC
import Spinner from "../../components/with-spinner/with-spinner.component";

const ExpensesPage = ({selectExpensesPage, currentUser, expensesCategoryFormStatus, toggleOnExpensesCategoryForm, fetchExpensesCategories, expensesCategories}) => {
    const [expensesCategoriesState, setExpensesCategoriesState] = useState({isLoading: true});
    const {isLoading} = expensesCategoriesState;
    const {displayName} = currentUser;

    useEffect(() => {
        selectExpensesPage('Expenses');
        const collectionRef = db.collection(`documents/${currentUser.uid}/expenses`);
        collectionRef.onSnapshot(async snapshot => {
            const transformedData = transformUtilities(snapshot);
            await fetchExpensesCategories(transformedData);
            setExpensesCategoriesState({isLoading: false})
        });

    }, [currentUser, fetchExpensesCategories, selectExpensesPage]);


    return (
        <ExpensesPageContainer>
            {
                expensesCategoryFormStatus ? <ExpenseCategoryCreationWindow/> : null
            }
            <ExpensesMenuContainer>
                <ExpensesUserDetailsContainer>
                    <ExpensesUserDetails>
                        <ExpensesUserIcon/>
                        <ExpensesIncomeContainer>
                            <ExpensesUserName>{`${displayName} - Balance`}</ExpensesUserName>
                            <ExpensesUserIncome>$23,000</ExpensesUserIncome>
                        </ExpensesIncomeContainer>
                    </ExpensesUserDetails>
                    <ExpensesAddIncomeLogo/>
                </ExpensesUserDetailsContainer>
                <HorizontalLine/>
                <ExpensesGridContainer>
                    {
                        isLoading ? <Spinner/> : expensesCategories.map(expenseCategory => {
                            return <ExpenseCard key={expenseCategory.expense_category_name}
                                                title={expenseCategory.expense_category_name}
                                                color={expenseCategory.expense_category_color}
                                                is_selected={expenseCategory.expense_category_selected}/>
                        })
                    }
                    <AddExpenseCard handleClick={toggleOnExpensesCategoryForm}/>
                </ExpensesGridContainer>
            </ExpensesMenuContainer>

            <ExpensesTransactionContainer>

            </ExpensesTransactionContainer>

        </ExpensesPageContainer>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectExpensesPage: (title) => dispatch(isSelectedExpenses(title)),
        toggleOnExpensesCategoryForm: () => dispatch(toggleOnExpensesCategoryForm()),
        fetchExpensesCategories: (expensesCategories) => dispatch(fetchExpensesCategory(expensesCategories))
    }
};

const mapStateToProps = createStructuredSelector(
    {
        currentUser: selectCurrentUser,
        expensesCategoryFormStatus: selectExpensesCategoryFormStatus,
        expensesCategories: selectExpensesCategories
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesPage);