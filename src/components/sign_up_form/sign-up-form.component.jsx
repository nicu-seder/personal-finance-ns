import React, {useState} from "react";

import {SignUpFormContainer} from "./sign-up-form.styles";

import FormInput from "../form_input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {auth, createUserProfile} from "../../firebase/firebase.utils";

//Import actions
import {signUp} from "../../redux/user/user.action.creator";

import {connect} from 'react-redux';


const SignUpForm = ({signUpUser})=>{
    const [userCredentials, setUserCredentials] = useState({displayName:'', email:'', password:'', confirmPassword:''});
    const {displayName, email, password, confirmPassword} = userCredentials;

    const handleChange = (event)=>{
        const {value, name} = event.target;
        setUserCredentials({...userCredentials, [name]:value});

    };

    const handleSubmit = async(event)=>{
        event.preventDefault();
        if(password !== confirmPassword){
            alert("Password doesn't match");
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            signUpUser(user);
            createUserProfile(user, {displayName})
        }catch (e) {
            console.log(e);
        }
        setUserCredentials({displayName:'', email:'', password:'', confirmPassword:''});
    };

    return (
        <SignUpFormContainer>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name={'displayName'}
                    type={'text'}
                    label={'Display name'}
                    required
                    handleChange={handleChange}
                />
                <FormInput
                    name={'email'}
                    type={'email'}
                    label={'User email'}
                    required={true}
                    handleChange={handleChange}
                />
                <FormInput
                    name={'password'}
                    type={'password'}
                    label={'Password'}
                    required={true}
                    handleChange={handleChange}
                />
                <FormInput
                    name={'confirmPassword'}
                    type={'password'}
                    label={'Confirm password'}
                    required={true}
                    handleChange={handleChange}
                />
                <CustomButton type={'submit'}>Sign up</CustomButton>
            </form>

        </SignUpFormContainer>
    );
};

const mapDispatchToProps = (dispatch)=>{
    return {
        signUpUser:(user)=>dispatch(signUp(user))
    }
};

export default connect(null, mapDispatchToProps)(SignUpForm);