import React from "react";

import {
    SignUpContainer,
    FormContainer,
    LogoNameContainer,
    LogoContainer,
    SignUpLogo,
    AppNameText,
    SignUpWelcomeContainer,
    SignUpWelcomeParagraph,
    SignUpWelcomeTitle,
    SignUpImg
} from "./sign-up.styles";
import leaf_logo from "../../assets/leaf_logo.png";
import SignUpForm from "../../components/sign_up_form/sign-up-form.component";

const SignUp = () => {
    return (
        <SignUpContainer>
            <FormContainer>
                <LogoNameContainer>
                    <LogoContainer>
                        <SignUpLogo src={leaf_logo}/>
                    </LogoContainer>
                    <AppNameText>leaf money</AppNameText>
                </LogoNameContainer>

                <SignUpWelcomeContainer>
                    <SignUpWelcomeTitle>Fantastic, you did it!</SignUpWelcomeTitle>
                    <SignUpWelcomeParagraph>Welcome! Please register</SignUpWelcomeParagraph>
                </SignUpWelcomeContainer>
                <SignUpForm/>
            </FormContainer>
            <SignUpImg>image</SignUpImg>
        </SignUpContainer>
    );
};

export default SignUp;