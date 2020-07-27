import React from "react";

//Import styles
import {RefreshButtonContainer, Refresh} from "./refresh_button.styles";

const RefreshButton = ({handleOnClick})=>{
    return (
        <RefreshButtonContainer onClick={handleOnClick}>
            <Refresh/>
        </RefreshButtonContainer>
    )
};

export default RefreshButton;