import React, {useState} from "react";
import {connect} from 'react-redux'

//import styles
import {
    ExpenseCategoryCreationContainer,
    ExpenseCategoryWindowClose,
    ExpenseCategoryWindowHeader,
    ExpenseCategoryFormContainer
} from "./expense_category_creation_window.styles";

//import actions
import {toggleOffExpensesCategoryForm} from "../../redux/expense/expenses.action.creator";

//import components
import FormInput from "../form_input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

//import firebase
import {createExpenseCategory} from "../../firebase/firebase.utils";

//import reselect
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {createStructuredSelector} from "reselect";

const ExpenseCategoryCreationWindow = ({toggleOffExpensesCategoryForm, currentUser}) => {
    const [expensesCategoryDetails, setExpensesCategoryDetails] = useState({
        expenseCategoryName: '',
        expenseCategoryColor: '#D7DCE1'
    });
    const {expenseCategoryName, expenseCategoryColor} = expensesCategoryDetails;
    const {uid} = currentUser;

    const handleChange = (event) => {
        const {value, name} = event.target;
        setExpensesCategoryDetails({...expensesCategoryDetails, [name]: value})
    };

    const createExpense = ()=>{
        createExpenseCategory(uid, expenseCategoryName, expenseCategoryColor);
        toggleOffExpensesCategoryForm();
    };

    return (
        <ExpenseCategoryCreationContainer>
            <ExpenseCategoryWindowHeader>
                <ExpenseCategoryWindowClose
                    onClick={toggleOffExpensesCategoryForm}>&#10005;</ExpenseCategoryWindowClose>
            </ExpenseCategoryWindowHeader>
            <ExpenseCategoryFormContainer>
                <FormInput
                    name={'expenseCategoryName'}
                    value={expenseCategoryName}
                    type={'text'}
                    label={'Expense category name'}
                    required
                    handleChange={handleChange}
                />
                <FormInput
                    name={'expenseCategoryColor'}
                    value={expenseCategoryColor}
                    type={'color'}
                    label={'Expense category color'}
                    required
                    handleChange={handleChange}
                />
            </ExpenseCategoryFormContainer>
            <CustomButton onClick={createExpense}>Create Expense Category</CustomButton>
        </ExpenseCategoryCreationContainer>
    )
};

const mapStateToProps = createStructuredSelector(
    {
        currentUser:selectCurrentUser
    }
);

const mapDispatchToProps = (dispatch) => {
    return {
        toggleOffExpensesCategoryForm: () => dispatch(toggleOffExpensesCategoryForm())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseCategoryCreationWindow);