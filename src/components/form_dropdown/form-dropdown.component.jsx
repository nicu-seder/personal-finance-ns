import React from "react";

//import styles
import {FormDropdownElement, FormDropdownContainer, FormDropdownText} from "./form-dropdown.styles";

const FormDropdown = ({name, handleChange,isRed, ...otherProps}) => {
    const {defaultValue, displayName} = otherProps;
    const month_date = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    return (

        <FormDropdownContainer>
            <FormDropdownText>{displayName}</FormDropdownText>
            <FormDropdownElement onChange={handleChange} defaultValue={defaultValue} name={name} isRed={isRed}>
                {
                    month_date.map(day => {
                        return <option key={day} value={day}>{day}</option>
                    })
                }
            </FormDropdownElement>
        </FormDropdownContainer>
    )
};

export default FormDropdown;