import React, {useState} from "react";

import {SignInFormContainer, SignInButtonsContainer} from "./sign-in-form.styles";

import FormInput from "../form_input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {connect} from 'react-redux';

import {auth, signInWithGoogle} from "../../firebase/firebase.utils";

import {googleSignIn} from "../../redux/user/user.action.creator";

const SignInForm = ()=>{
    const [userCredentials, setUserCredentials] = useState({email:'', password:''});
    const {email, password} = userCredentials;

    const handleChange = (event)=>{
        const {value, name} = event.target;
        setUserCredentials({...userCredentials, [name]:value});
    };

    const handleSubmit = async (event)=>{
        event.preventDefault();
        try{
            await auth.signInWithEmailAndPassword(email, password);
            setUserCredentials({email:'', password:''});
        }catch (e) {
            console.log(e);
        }
    };


    return(
      <SignInFormContainer>
          <form onSubmit={handleSubmit}>
              <FormInput
                name={'email'}
                value={email}
                type={'email'}
                label={'User name'}
                required={true}
                handleChange={handleChange}
              />
              <FormInput
                  name={'password'}
                  value={password}
                  type={'password'}
                  label={'Password'}
                  required={true}
                  handleChange={handleChange}
              />

          <SignInButtonsContainer>
              <CustomButton type={'submit'}>Login</CustomButton>
              <CustomButton onClick={signInWithGoogle} googleSignIn>Sign In with google</CustomButton>
          </SignInButtonsContainer>
          </form>
      </SignInFormContainer>
    );
};

const mapDispatchToProps = (dispatch)=>{
    return {
        signInWithGoogle:(user)=>dispatch(googleSignIn(user))
    }
};

export default connect(null, mapDispatchToProps)(SignInForm);