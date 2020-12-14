import React, {useState} from "react";
import {connect} from 'react-redux';

//import styles
import {
    TransactionCreationContainer,
    TransactionFormContainer,
    TransactionWindowClose,
    TransactionWindowHeader
} from "./transaction_creation_window.styles";

//import components
import FormInput from "../form_input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

//import actions
import {toggleOffTransactionForm} from "../../redux/expense/expenses.action.creator";

//import firebase
import {createTransaction} from "../../firebase/firebase.utils";

//import reselect
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {getSelectedExpenseCategory} from "../../redux/expense/expenses.selectors";


const TransactionCreationWindow = ({currentUser, toggleOffTransactionForm, getSelectedExpenseCategory}) => {
    const [transactionDetails, setTransactionDetails] = useState({
        transactionName: '', transactionDescription: '', transactionValue: ''
    });

    const {transactionName, transactionDescription, transactionValue} = transactionDetails;
    const {uid} = currentUser;

    const handleChange = (event) => {
        const {value, name} = event.target;
        setTransactionDetails({...transactionDetails, [name]: value})
    };

    const registerTransaction = () => {
        createTransaction(uid, transactionName, transactionValue, transactionDescription, getSelectedExpenseCategory);
        toggleOffTransactionForm();
    };

    return (
        <TransactionCreationContainer>
            <TransactionWindowHeader>
                <TransactionWindowClose onClick={toggleOffTransactionForm}>&#10005;</TransactionWindowClose>
            </TransactionWindowHeader>
            <TransactionFormContainer>
                <FormInput
                    name={'transactionName'}
                    value={transactionName}
                    type={'text'}
                    label={'Name'}
                    required
                    handleChange={handleChange}
                />
                <FormInput
                    name={'transactionValue'}
                    value={transactionValue}
                    type={'text'}
                    label={'Transaction value'}
                    required
                    handleChange={handleChange}
                />
                <FormInput
                    name={'transactionDescription'}
                    value={transactionDescription}
                    type={'text'}
                    label={'Description'}
                    required
                    handleChange={handleChange}
                />

            </TransactionFormContainer>
            <CustomButton onClick={registerTransaction}>Create Expense Category</CustomButton>
        </TransactionCreationContainer>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        toggleOffTransactionForm: () => dispatch(toggleOffTransactionForm())
    }
};

const mapStateToProps = createStructuredSelector(
    {
        currentUser: selectCurrentUser,
        getSelectedExpenseCategory:getSelectedExpenseCategory
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(TransactionCreationWindow);