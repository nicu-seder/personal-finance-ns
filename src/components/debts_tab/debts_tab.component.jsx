import React from "react";
import {connect} from 'react-redux'

//import styles
import {DebtsTabContainer} from "./debts_tab.styles";

//import components
import DebtItem from "../debts_item/debts_item.component";

//import reselect
import {createStructuredSelector} from "reselect";
import {selectDebtList} from "../../redux/debt/debt.selectors";

const DebtsTab = ({debts}) => {
    return (
        <DebtsTabContainer>
            {
                debts ? debts.map(debt => {
                    return <DebtItem key={debt.debt_name} title={debt.debt_name} isSelected={debt.is_selected}/>
                }) : null
            }
        </DebtsTabContainer>
    )
};

const mapStateToProps = createStructuredSelector(
    {
        debts: selectDebtList
    }
);

export default connect(mapStateToProps, null)(DebtsTab);