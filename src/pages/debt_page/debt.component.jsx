import React, {useEffect, useState} from "react";
import {connect} from 'react-redux';

//import action
import {isSelectedDebts} from "../../redux/selected_pages/selected_pages.action.creator";
import {fetchDebts} from "../../redux/debt/debt.action.creator";

//import components
import DebtsTab from "../../components/debts_tab/debts_tab.component";
import AddDebts from "../../components/add_item_button/add_debts.component";
import DebtCreationWindow from "../../components/debt_creation_window/debt_creation_window.component";
import DebtDetails from "../../components/debt_details/debt_details.component";

//import styles
import {DebtsPageContainer} from "./debt.styles";

//import reselect
import {createStructuredSelector} from "reselect";
import {selectDebtFormStatus} from "../../redux/debt/debt.selectors";
import {selectDebtList} from "../../redux/debt/debt.selectors";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {db, transformUtilities} from "../../firebase/firebase.utils";

//import HOC
import Spinner from "../../components/with-spinner/with-spinner.component";


const DebtPage = ({selectDebtsPage, debtFormStatus, currentUser, fetchDebts, debts}) => {
    const [debtState, setDebtState] = useState({isLoading: true});
    const {isLoading} = debtState;

    useEffect(() => {
        selectDebtsPage('Loans');
        const collectionRef = db.collection(`documents/${currentUser.uid}/debts`);
        collectionRef.onSnapshot(async snapshot => {
            const transformedData = transformUtilities(snapshot);
            await fetchDebts(transformedData);
            setDebtState({isLoading: false});
        })
    }, [selectDebtsPage, fetchDebts, currentUser]);

    return (
        <DebtsPageContainer>
            <AddDebts/>
            <DebtsTab/>
            {
                debtFormStatus ? <DebtCreationWindow/> : null
            }
            {
                isLoading ? <Spinner/> : debts.map(debt => {
                    if (debt.is_selected) {
                        return <DebtDetails key={debt.debt_name} {...debt}/>
                    } else {
                        return null;
                    }

                })
            }
        </DebtsPageContainer>

    )
};

const mapStateToProps = createStructuredSelector(
    {
        debtFormStatus: selectDebtFormStatus,
        currentUser: selectCurrentUser,
        debts: selectDebtList
    }
);

const mapDispatchToProps = dispatch => {
    return {
        selectDebtsPage: (title) => dispatch(isSelectedDebts(title)),
        fetchDebts: (debts) => dispatch(fetchDebts(debts))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DebtPage);