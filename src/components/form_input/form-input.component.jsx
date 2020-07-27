import React from "react";

import {FormInputContainer, FormInputText, FormInputArea} from "./form-input.styles";

const FormInput = ({label, handleChange, ...otherProps}) => {
    return (
        <FormInputContainer>
            <FormInputText>{label}</FormInputText>
            <FormInputArea onChange={handleChange} {...otherProps}/>
        </FormInputContainer>
    );
};

export default FormInput;