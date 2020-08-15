import React from "react";
import {connect} from 'react-redux';

//import styles
import {
    DebtDetailsContainer,
    DebtValue,
    DebtValueInfo,
    DebtValueTitle,
    DebtCardContainer,
    DebtInfoContainer, DebtBankInfo, DebtBankName, DebtBankTitle, DebtVerticalLine, DebtDetailsBlock, DebtDetailsDelete
} from "./debt_details.styles";

//import components
import DebtCard from "../debt_info_card/debt_card.component";
import DebtChart from "../charts/debt_chart.component";

//import toolbox
import {parseStrToCurrency, parseDate, debtCompletion, remainingPeriod} from "../../toolbox/toolbox";

//import progressbar
import 'progressbar.js';

//import from firebase
import {deleteDebt} from "../../firebase/firebase.utils";

//import from reselect
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../redux/user/user.selectors";

const DebtDetails = ({currentUser, ...otherProps}) => {
    const {debt_name, debt_currency, debt_value, debt_fix_interest, debt_variable_interest, debt_length, debt_first_payment_date, bank_name} = otherProps;
    const debt_interest = `${(parseFloat(debt_fix_interest) + parseFloat(debt_variable_interest)).toFixed(2)}%`;
    const endDate = parseDate(debt_first_payment_date, parseInt(debt_length));
    const {uid} = currentUser;

    return (
        <DebtDetailsContainer>
            <DebtDetailsBlock>


                <DebtValueInfo>
                    <DebtValueTitle>{`${debt_name} - Debt Value`}</DebtValueTitle>
                    <DebtValue>{parseStrToCurrency(debt_value, debt_currency)}</DebtValue>
                </DebtValueInfo>

                <DebtInfoContainer>
                    <DebtBankInfo>
                        <DebtBankTitle>
                            Bank name
                        </DebtBankTitle>
                        <DebtBankName>
                            {bank_name}
                        </DebtBankName>
                    </DebtBankInfo>

                    <DebtVerticalLine/>

                    <DebtBankInfo>
                        <DebtBankTitle>
                            Debt - Start date
                        </DebtBankTitle>
                        <DebtBankName>
                            {debt_first_payment_date}
                        </DebtBankName>
                    </DebtBankInfo>

                    <DebtVerticalLine/>

                    <DebtBankInfo>
                        <DebtBankTitle>
                            Debt - End date
                        </DebtBankTitle>
                        <DebtBankName>
                            {endDate}
                        </DebtBankName>
                    </DebtBankInfo>

                    <DebtVerticalLine/>

                    <DebtBankInfo>
                        <DebtBankTitle>
                            Debt's length
                        </DebtBankTitle>
                        <DebtBankName>
                            {`${debt_length} mo.`}
                        </DebtBankName>
                    </DebtBankInfo>

                    <DebtVerticalLine/>

                    <DebtBankInfo>
                        <DebtBankTitle>
                            Remaining period
                        </DebtBankTitle>
                        <DebtBankName>
                            {`${remainingPeriod(debt_length, endDate)} mo.`}
                        </DebtBankName>
                    </DebtBankInfo>

                    <DebtVerticalLine/>

                    <DebtBankInfo>
                        <DebtBankTitle>
                            Interest rate
                        </DebtBankTitle>
                        <DebtBankName>
                            {debt_interest}
                        </DebtBankName>
                    </DebtBankInfo>

                </DebtInfoContainer>
                <DebtCardContainer>
                    <DebtCard value={parseStrToCurrency(debt_value, debt_currency)} color={'#5a7ff4'} title={'Debt initial value'} subtitle={'Initial debt value when offered'}/>
                    <DebtCard value={`${debt_fix_interest}%`} color={'#3f40db'} title={'Debt FIX interest rate'} subtitle={'Fix interest rate offered by the bank'}/>
                    <DebtCard value={`${debt_variable_interest}%`} color={'#fbc774'} title={'Debt VARIABLE interest rate'} subtitle={'Variable interest rate according to bank policy'}/>
                    <DebtChart debt_completion_percentage={debtCompletion(debt_length, endDate)}/>
                </DebtCardContainer>
            </DebtDetailsBlock>
            <DebtDetailsDelete onClick={() => deleteDebt(uid, debt_name)}>&#10005;</DebtDetailsDelete>
        </DebtDetailsContainer>
    )
};

const mapStateToProps = createStructuredSelector(
    {
        currentUser: selectCurrentUser
    }
);

export default connect(mapStateToProps, null)(DebtDetails);