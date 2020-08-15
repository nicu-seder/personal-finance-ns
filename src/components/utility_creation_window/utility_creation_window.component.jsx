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
import FormDropdown from "../form_dropdown/form-dropdown.component";

//Import from reselect
import {selectCurrentUser} from "../../redux/user/user.selectors";

const UtilityCreationWindow = ({toggleOffUtilityForm, currentUser}) => {
    const [utilityDetails, setUtilityDetails] = useState({
        utilityName: '',
        utilityPaymentDeadline: '',
        utilityClientCode: '',
        utilityAddress: '',
        utilityIndexStartDate: 1,
        utilityIndexEndDate: 31
    });
    const {utilityName, utilityPaymentDeadline, utilityIndexStartDate, utilityIndexEndDate, utilityAddress, utilityClientCode} = utilityDetails;
    const {uid} = currentUser;

    const handleChange = (event) => {
        const {value, name} = event.target;
        setUtilityDetails({...utilityDetails, [name]: value});
    };

    const registerUtility = () => {
        createUtility(uid, utilityName, utilityIndexStartDate, utilityIndexEndDate, utilityPaymentDeadline, utilityClientCode, utilityAddress);
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
                    label={'Utility name'}
                    required
                    handleChange={handleChange}
                />
                <FormInput
                    name={'utilityClientCode'}
                    value={utilityClientCode}
                    type={'text'}
                    label={'Client code'}
                    required
                    handleChange={handleChange}
                />
                <FormInput
                    name={'utilityAddress'}
                    value={utilityAddress}
                    type={'text'}
                    label={'Utility address'}
                    required
                    handleChange={handleChange}
                />
                <FormDropdown
                    name={'utilityIndexStartDate'}
                    displayName={'Index start day'}
                    handleChange={handleChange}
                    required
                    defaultValue={1}
                />
                <FormDropdown
                    name={'utilityIndexEndDate'}
                    displayName={'Index end day'}
                    handleChange={handleChange}
                    required
                    defaultValue={31}
                />
                <FormDropdown
                    name={'utilityPaymentDeadline'}
                    displayName={'Invoice deadline'}
                    handleChange={handleChange}
                    required
                    defaultValue={1}
                    isRed={true}
                />
            </UtilityFormContainer>
            <CustomButton onClick={registerUtility}>Create</CustomButton>
        </UtilityWindowContainer>
    );
};

const mapStateToProps = createStructuredSelector(
    {
        currentUser: selectCurrentUser
    }
);

const mapDispatchToProps = (dispatch) => {
    return {
        toggleOffUtilityForm: () => dispatch(toggleOffUtilityForm())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UtilityCreationWindow);