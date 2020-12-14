import React, {useEffect, useState} from "react";
import {connect} from 'react-redux';

//import styles
import {TransactionsInformationContainer} from "./transactions_information.styles";

//import components
import Transaction from "../transaction/transaction.component";

//import reselect
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {getSelectedExpenseCategory} from "../../redux/expense/expenses.selectors";
import {selectTransactions} from "../../redux/expense/expenses.selectors";

//import firebase
import {db, transformUtilities} from "../../firebase/firebase.utils";

//import actions
import {fetchTransactions} from "../../redux/expense/expenses.action.creator";
import {selectExpenseCategoryName} from "../../redux/expense/expenses.action.creator";

//import HOC
import Spinner from "../with-spinner/with-spinner.component";

//import libraries
import moment from "moment";

const TransactionsInformation = ({currentUser, selectedExpenseCategory, fetchTransactions, transactions, selectExpenseCategoryName}) => {
    const [transactionDetails, setTransactionDetails] = useState({isLoading: true});
    const {isLoading} = transactionDetails;

    useEffect(() => {
        const collectionRef = db.collection(`documents/${currentUser.uid}/expenses/${selectedExpenseCategory}/${selectedExpenseCategory}`);
        console.log(selectedExpenseCategory);
        collectionRef.onSnapshot(async snapshot => {
            const transformedData = transformUtilities(snapshot);
            await fetchTransactions(transformedData);
            setTransactionDetails({isLoading: false});
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
    }, [fetchTransactions, currentUser.uid, selectedExpenseCategory, selectExpenseCategoryName]);

    return (
        <TransactionsInformationContainer>
            {
                isLoading ? <Spinner/> : transactions.map(transaction => {
                    console.log(new Date(transaction.createdAt).getDate());
                    return <Transaction
                        key={transaction.transaction_name}
                        date={moment(new Date(transaction.createdAt.seconds * 1000)).format("MMMM Do YYYY")}
                        name={transaction.transaction_name}
                        description={transaction.transaction_description}
                        value={transaction.transaction_value}/>
                })
            }
        </TransactionsInformationContainer>
    )
};

const mapStateToProps = createStructuredSelector(
    {
        currentUser: selectCurrentUser,
        selectedExpenseCategory: getSelectedExpenseCategory,
        transactions: selectTransactions
    }
);

const mapDispatchToProps = dispatch => {
    return {
        fetchTransactions: (transactions) => dispatch(fetchTransactions(transactions)),
        selectExpenseCategoryName: (expenseCategoryName) => dispatch(selectExpenseCategoryName(expenseCategoryName))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsInformation);