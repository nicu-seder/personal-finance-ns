import React from "react";

//Import from assets
import leaf_logo from '../../assets/leaf_logo.png';

import {
    SignInContainer,
    FormContainer,
    LogoNameContainer,
    SignInWelcomeContainer,
    SignInLogo,
    LogoContainer,
    AppNameText,
    SignInWelcomeTitle,
    SignInWelcomeParagraph,
    ToSignUpContainer,
    ToSignUpLink,
    ToSingUpText,
    SignInImg
} from "./sign-in.styles";

import SignInForm from "../../components/sign_in_form/sign-in-form.component";

const SignIn = () => {
    return (
        <SignInContainer>
            <FormContainer>
                <LogoNameContainer>
                    <LogoContainer to={'/'}>
                        <SignInLogo src={leaf_logo}/>
                    </LogoContainer>
                    <AppNameText>leaf money</AppNameText>
                </LogoNameContainer>

                <SignInWelcomeContainer>
                    <SignInWelcomeTitle>Super good push</SignInWelcomeTitle>
                    <SignInWelcomeParagraph>Welcome! Please introduce your credentials</SignInWelcomeParagraph>
                </SignInWelcomeContainer>

                <SignInForm/>

                <ToSignUpContainer>
                    <ToSingUpText>New use?</ToSingUpText>
                    <ToSignUpLink to={'/signup'}>signup</ToSignUpLink>
                </ToSignUpContainer>
            </FormContainer>
            <SignInImg/>
        </SignInContainer>
    );
};

export default SignIn;