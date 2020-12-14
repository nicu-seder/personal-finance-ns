import React from "react";

//import redux
import {connect} from 'react-redux';

//import reselect
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../redux/user/user.selectors";

//Import styles
import {
    UtilityContainer,
    UtilityDetails,
    UtilityCalendar,
    UtilityTitle,
    UtilityWindowClose,
    UtilityItemHLine,
    UtilityWindowEdit,
    UtilityCloseEdit,
    UtilityItemClientCode,
    UtilityInvoiceDetails,
    UtilityInformationContainer,
    UtilityItemVLine, UtilityItemClientInfoContainer, UtilityItemClientInfoTitle
} from "./utility_item.styles";

//Import components
import UtilityIndexDay from "../utility_index_day/utility_index_day.component";

//import firebase
import {deleteUtility} from "../../firebase/firebase.utils";

const Utility = ({utility_name, currentUser, utility_index_period, utility_payment_deadline, utility_client_code, utility_address}) => {
    const list_of_days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    return (
        <UtilityContainer>
            <UtilityDetails>
                <UtilityTitle>{utility_name}</UtilityTitle>
                <UtilityCloseEdit>
                    <UtilityWindowEdit>&#9998;</UtilityWindowEdit>
                    <UtilityWindowClose
                        onClick={() => deleteUtility(currentUser.uid, utility_name)}>&#10005;</UtilityWindowClose>
                </UtilityCloseEdit>
            </UtilityDetails>
            <UtilityItemHLine/>
            <UtilityInformationContainer>
                <UtilityCalendar>
                    {
                        list_of_days.map((value, index) => {
                            return <UtilityIndexDay key={index} day_number={value} index_days={utility_index_period}
                                                    payment_deadline={utility_payment_deadline}/>
                        })
                    }
                </UtilityCalendar>
                <UtilityItemVLine/>
                <UtilityInvoiceDetails>
                    <UtilityItemClientInfoContainer>
                        <UtilityItemClientInfoTitle>Client code</UtilityItemClientInfoTitle>
                        <UtilityItemClientCode>
                            {utility_client_code}
                        </UtilityItemClientCode>
                    </UtilityItemClientInfoContainer>

                    <UtilityItemClientInfoContainer>
                        <UtilityItemClientInfoTitle>Invoice address</UtilityItemClientInfoTitle>
                        <UtilityItemClientCode>
                            {utility_address}
                        </UtilityItemClientCode>
                    </UtilityItemClientInfoContainer>
                </UtilityInvoiceDetails>
            </UtilityInformationContainer>
        </UtilityContainer>
    )
};

const mapStateToProps = createStructuredSelector(
    {
        currentUser: selectCurrentUser
    }
);

export default connect(mapStateToProps, null)(Utility);