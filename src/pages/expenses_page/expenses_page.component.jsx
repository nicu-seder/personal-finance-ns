import React, {useEffect, useState} from "react";
import {connect} from 'react-redux';

//import actions
import {isSelectedExpenses} from "../../redux/selected_pages/selected_pages.action.creator";
import {toggleOnExpensesCategoryForm, toggleOnTransactionForm} from "../../redux/expense/expenses.action.creator";
import {fetchExpensesCategory} from "../../redux/expense/expenses.action.creator";
import {selectExpenseCategoryName} from "../../redux/expense/expenses.action.creator";


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
    ExpensesGridContainer,
    ExpensesTransactionLogo,
    ExpensesTransactionTitle,
    TransactionAddLogo,
    ExpensesTransactionDetails
} from "./expenses_page.styles";

//import reselect
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {createStructuredSelector} from "reselect";
import {
    selectExpensesCategoryFormStatus,
    selectExpensesCategories,
    selectTransactionFormStatus,
    getSelectedExpenseCategory
} from "../../redux/expense/expenses.selectors";


//import components
import ExpenseCard from "../../components/expense-card/expense-card.component";
import AddExpenseCard from "../../components/add_expense_card/add_expense_card.component";
import ExpenseCategoryCreationWindow
    from "../../components/expanse_category_creation_window/expense_category_creation_window_component";
import TransactionCreationWindow
    from "../../components/transaction_creation_window/transaction_creation_window.component";
import TransactionsInformation from "../../components/transactions_information/transactions_information.component";

//import firebase
import {db, transformUtilities} from "../../firebase/firebase.utils";

//import HOC
import Spinner from "../../components/with-spinner/with-spinner.component";


const ExpensesPage = ({
                          selectExpensesPage,
                          currentUser,
                          expensesCategoryFormStatus,
                          toggleOnExpensesCategoryForm,
                          fetchExpensesCategories,
                          expensesCategories,
                          toggleOnTransactionForm,
                          transactionFormStatus,
                          getSelectedExpenseCategory,
                          fetchTransactions,
                          selectExpenseCategoryName
                      }) => {
    const [expensesCategoriesState, setExpensesCategoriesState] = useState({
        isLoadingExpenses: true,
        isLoadingTransactions: true
    });
    const {isLoadingExpenses} = expensesCategoriesState;
    const {displayName} = currentUser;

    useEffect(() => {
        selectExpensesPage('Expenses');
        const collectionRef = db.collection(`documents/${currentUser.uid}/expenses`);
        collectionRef.onSnapshot(async snapshot => {
            const transformedData = transformUtilities(snapshot);
            await fetchExpensesCategories(transformedData);
            setExpensesCategoriesState({isLoadingExpenses: false});
            // eslint-disable-next-line array-callback-return
            transformedData.map(expense => {
                if (expense.expense_category_selected) {
                    selectExpenseCategoryName(expense.expense_category_name);
                }
            })
        });


        // const collectionExpenseRef = db.collection(`documents/${currentUser.uid}/expenses`);
        // collectionExpenseRef.onSnapshot(async snapshot => {
        //     const transformedData = transformUtilities(snapshot);
        //     transformedData.map(expense => {
        //         if (expense.expense_category_selected) {
        //             selectExpenseCategoryName(expense.expense_category_name);
        //         }
        //     })
        // })
    }, [fetchTransactions, getSelectedExpenseCategory, currentUser, fetchExpensesCategories, selectExpensesPage, selectExpenseCategoryName]);


    return (
        <ExpensesPageContainer>
            {
                expensesCategoryFormStatus ? <ExpenseCategoryCreationWindow/> : null
            }
            {
                transactionFormStatus ? <TransactionCreationWindow/> : null
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
                        isLoadingExpenses ? <Spinner/> : expensesCategories.map(expenseCategory => {
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
                <ExpensesTransactionLogo/>
                <ExpensesTransactionDetails>
                    <ExpensesTransactionTitle>Transactions history </ExpensesTransactionTitle>
                    <TransactionAddLogo onClick={toggleOnTransactionForm}/>
                </ExpensesTransactionDetails>
                <TransactionsInformation/>
            </ExpensesTransactionContainer>

        </ExpensesPageContainer>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectExpensesPage: (title) => dispatch(isSelectedExpenses(title)),
        toggleOnExpensesCategoryForm: () => dispatch(toggleOnExpensesCategoryForm()),
        toggleOnTransactionForm: () => dispatch(toggleOnTransactionForm()),
        fetchExpensesCategories: (expensesCategories) => dispatch(fetchExpensesCategory(expensesCategories)),
        selectExpenseCategoryName: (expenseCategoryName) => dispatch(selectExpenseCategoryName(expenseCategoryName))
    }
};

const mapStateToProps = createStructuredSelector(
    {
        currentUser: selectCurrentUser,
        expensesCategoryFormStatus: selectExpensesCategoryFormStatus,
        expensesCategories: selectExpensesCategories,
        transactionFormStatus: selectTransactionFormStatus,
        getSelectedExpenseCategory: getSelectedExpenseCategory
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesPage);