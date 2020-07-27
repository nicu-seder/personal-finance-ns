import React from "react";

//Import styles
import {CalendarIconContainer, BillsCount, CalendarIconStyled} from "./calendar_icon.styles";

const CalendarIcon = ()=>{
    return (
        <CalendarIconContainer>
            <CalendarIconStyled/>
            <BillsCount>3</BillsCount>
        </CalendarIconContainer>
    );
};

export default CalendarIcon;