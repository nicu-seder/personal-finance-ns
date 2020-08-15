import React from "react";
import {connect} from 'react-redux';

//import reselect
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {createStructuredSelector} from "reselect";

//import styles
import {DebtItemContainer, DebtItemTitle} from "./debts_item.styles";

//import firestore
import {selectDebtFirestore} from "../../firebase/firebase.utils";


const DebtItem = ({currentUser, title, isSelected})=>{

    const selectDebt = ()=>{
        selectDebtFirestore(currentUser.uid, title);
    };

    return (
        <DebtItemContainer selected={isSelected} onClick={selectDebt}>
            <DebtItemTitle> {title}</DebtItemTitle>
        </DebtItemContainer>
    )
};

const mapStateToProps = createStructuredSelector(
    {
        currentUser:selectCurrentUser
    }
);

export default connect(mapStateToProps, null)(DebtItem);