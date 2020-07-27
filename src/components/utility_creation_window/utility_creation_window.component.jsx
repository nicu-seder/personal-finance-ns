import React, {useState} from "react";
import {createStructuredSelector} from "reselect";

import {connect} from 'react-redux';

//Import actions
import {toggleOffUtilityForm} from "../../redux/utility/utility.action.creator";

//Import styles
import {
    UtilityWindowContainer,
    UtilityFormContainer,
    UtilityWindowHeader,
    UtilityWindowClose
} from "./utility_creation_window.styles";
import FormInput from "../form_input/form-input.component";

//Import from firebase
import {createUtility} from "../../firebase/firebase.utils";

//Import components
import CustomButton from "../custom-button/custom-button.component";

//Import from reselect
import {selectCurrentUser} from "../../redux/user/user.selectors";

const UtilityCreationWindow = ({toggleOffUtilityForm, currentUser}) => {
    const [utilityDetails, setUtilityDetails] = useState({utilityName: '', utilityIndexDays: '', utilityPaymentDeadline:''});
    const {utilityName, utilityIndexDays, utilityPaymentDeadline} = utilityDetails;
    const {uid} = currentUser;

    const handleChange = (event) => {
        const {value, name} = event.target;
        setUtilityDetails({...utilityDetails, [name]: value});
    };

    const registerUtility = () => {
        createUtility(uid,utilityName, utilityIndexDays, utilityPaymentDeadline);
        toggleOffUtilityForm();
    };


    return (
        <UtilityWindowContainer>
            <UtilityWindowHeader>
                <UtilityWindowClose onClick={toggleOffUtilityForm}>&#10005;</UtilityWindowClose>
            </UtilityWindowHeader>
            <UtilityFormContainer>
                <FormInput
                    name={'utilityName'}
                    value={utilityName}
                    type={'text'}
                    label={'Utility Name'}
                    required
                    handleChange={handleChange}
                />
                <FormInput
                    name={'utilityIndexDays'}
                    value={utilityIndexDays}
                    type={'text'}
                    label={'Utility index period'}
                    required
                    handleChange={handleChange}
                />
                <FormInput
                    name={'utilityPaymentDeadline'}
                    value={utilityPaymentDeadline}
                    type={'text'}
                    label={'Payment deadline'}
                    required
                    handleChange={handleChange}
                />
            </UtilityFormContainer>
            <CustomButton onClick={registerUtility}>Create</CustomButton>
        </UtilityWindowContainer>
    );
};

const mapStateToProps = createStructuredSelector(
    {
        currentUser:selectCurrentUser
    }
);

const mapDispatchToProps = (dispatch) => {
    return {
        toggleOffUtilityForm: () => dispatch(toggleOffUtilityForm())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UtilityCreationWindow);