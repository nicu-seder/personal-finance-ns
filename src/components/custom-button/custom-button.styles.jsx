import styled, {css} from "styled-components";

const buttonStyles = css`
    background-color: #167D86;
    color: white;
    border: none;
    
    &:hover {
    background-color:white;
    color:#167D86 ;
    border:1px solid #167D86;
    }
`;

const googleButtonStyles = css`
    background-color: #EC0016;
    color: white;
    border: none;
    
    &:hover {
    background-color:white;
    color:#EC0016 ;
    border:1px solid #EC0016;
    }
`;

const getButtonStyles = (props)=>{
    if(props.googleSignIn){
        return googleButtonStyles;
    }
    return buttonStyles;
};

export const CustomButtonContainer = styled.button`
    margin-top: 20px;
    height:50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    text-transform: uppercase;
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;
    border-radius: 2px;
    ${getButtonStyles};
`;