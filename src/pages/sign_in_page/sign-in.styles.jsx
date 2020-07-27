import styled from 'styled-components';
import {Link} from "react-router-dom";
import {ReactComponent as SignInImage} from '../../assets/signin.svg';

export const SignInContainer = styled.div`
    margin-top: 100px;
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

export const SignInWelcomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
   
`;

export const LogoContainer = styled.div`
    height: 100%;
    width: 50px;
    justify-content: flex-start;
    align-items: center;
`;

export const SignInLogo = styled.img`
    height: 80%;
    width: 80%;
    padding: 5px;
`;

export const AppNameText = styled.h2`
    color: black;
`;

export const SignInWelcomeTitle = styled.h1`
    margin: 0;
`;

export const SignInWelcomeParagraph = styled.p`
    margin: 0;
    color: #878C96;
`;

export const ToSignUpContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const ToSingUpText = styled.p`
    color: #D7DCE1;
`;

export const ToSignUpLink = styled(Link)`
    color: #167D86;
    text-decoration: none;
    margin-left: 3px;
`;

export const SignInImg = styled(SignInImage)`
  width: 70%;
  
`;
