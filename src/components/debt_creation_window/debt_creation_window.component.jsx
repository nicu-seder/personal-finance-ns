import React, {useState} from "react";
import {connect} from 'react-redux';

//import styles
import {DebtWindowContainer, DebtFormContainer, DebtWindowClose, DebtWindowHeader} from "./debt_creation_window.styles";

//import components
import FormInput from "../form_input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

//import actions
import {toggleOffDebtForm} from "../../redux/debt/debt.action.creator";

//import firebase
import {createDebt} from "../../firebase/firebase.utils";

//import reselect
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {createStructuredSelector} from "reselect";


const DebtCreationWindow = ({toggleOffDebtForm, currentUser}) => {

    const [debtDetails, setDebtDetails] = useState({
        debtName: '',
        debtBank: '',
        debtValue: '',
        debtLengthMonths: '',
        debtInterestRateFix: '',
        debtInterestRateVariable: '',
        debtFirsPaymentDate: 'dd-mm-yyyy',
        debtCurrency: '',
    });

    const {debtName, debtBank, debtValue, debtLengthMonths, debtInterestRateFix, debtInterestRateVariable, debtFirsPaymentDate, debtCurrency} = debtDetails;
    const {uid} = currentUser;

    const handleChange = (event) => {
        const {value, name} = event.target;
        setDebtDetails({...debtDetails, [name]: value});
    };

    const registerDebt = () => {
        createDebt(uid, debtBank, debtName, debtValue, debtCurrency, debtLengthMonths, debtInterestRateFix, debtInterestRateVariable, debtFirsPaymentDate);
        toggleOffDebtForm()
    };

    return (
        <DebtWindowContainer>
            <DebtWindowHeader>
                <DebtWindowClose onClick={toggleOffDebtForm}>&#10005;</DebtWindowClose>
            </DebtWindowHeader>
            <DebtFormContainer>
                <FormInput
                    name={'debtName'}
                    value={debtName}
                    type={'text'}
                    label={'Debt name'}
                    required
                    handleChange={handleChange}
                />
                <FormInput
                    name={'debtBank'}
                    value={debtBank}
                    type={'text'}
                    label={'Bank'}
                    required
                    handleChange={handleChange}
                />
                <FormInput
                    name={'debtValue'}
                    value={debtValue}
                    type={'text'}
                    label={'Loan value'}
                    required
                    handleChange={handleChange}
                />
                <FormInput
                    name={'debtCurrency'}
                    value={debtCurrency}
                    type={'text'}
                    label={'Loan currency'}
                    required
                    handleChange={handleChange}
                />
                <FormInput
                    name={'debtLengthMonths'}
                    value={debtLengthMonths}
                    type={'text'}
                    label={'Loan length(months)'}
                    required
                    handleChange={handleChange}
                />
                <FormInput
                    name={'debtInterestRateFix'}
                    value={debtInterestRateFix}
                    type={'text'}
                    label={'Interest rate(fix part)'}
                    required
                    handleChange={handleChange}
                />
                <FormInput
                    name={'debtInterestRateVariable'}
                    value={debtInterestRateVariable}
                    type={'text'}
                    label={'Interest rate(variable rate)'}
                    required
                    handleChange={handleChange}
                />
                <FormInput
                    name={'debtFirsPaymentDate'}
                    value={debtFirsPaymentDate}
                    type={'date'}
                    label={'First payment date'}
                    required
                    handleChange={handleChange}
                />
            </DebtFormContainer>
            <CustomButton onClick={registerDebt}>Create</CustomButton>
        </DebtWindowContainer>
    )
};

const mapStateToProps = createStructuredSelector(
    {
        currentUser: selectCurrentUser
    }
);

const mapDispatchToProps = dispatch => {
    return {
        toggleOffDebtForm: () => dispatch(toggleOffDebtForm())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DebtCreationWindow);