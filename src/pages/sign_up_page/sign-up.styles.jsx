import styled from "styled-components";
import {ReactComponent as SignUpImage} from "../../assets/signup.svg";

export const SignUpContainer = styled.div`
    margin-top: 50px;
    margin-left: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    width:350px;
`;

export const LogoNameContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const LogoContainer = styled.div`
    height: 100%;
    width: 50px;
    justify-content: flex-start;
    align-items: center;
`;

export const SignUpLogo = styled.img`
    height: 80%;
    width: 80%;
    padding: 5px;
`;

export const AppNameText = styled.h2`
    color: black;
`;

export const SignUpWelcomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0;
`;

export const SignUpWelcomeTitle = styled.h1`
    margin: 0;
`;

export const SignUpWelcomeParagraph = styled.p`
    margin: 0;
    color: #878C96;
`;

export const SignUpImg = styled(SignUpImage)`
  width: 65%;
  
`;
