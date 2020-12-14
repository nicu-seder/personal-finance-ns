import React, {useEffect, useState} from "react";

import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import {selectUtilityFormStatus, selectUtilityList} from "../../redux/utility/utility.selectors";

//Import styles
import {UtilitiesPageContainer, UtilitiesPageItems} from "./utilities_page.styles";

//Import components
import AddUtilities from "../../components/add_item_button/add_utility.component";
import UtilityCreationWindow from "../../components/utility_creation_window/utility_creation_window.component";
import Utility from "../../components/utility_item/utility_item.component";


//Import from firebase
import {transformUtilities, db} from "../../firebase/firebase.utils";

//Import actions
import {updateUtilities} from "../../redux/utility/utility.action.creator";
import {isSelectedUtilities} from "../../redux/selected_pages/selected_pages.action.creator";

//Import from reselect
import {selectCurrentUser} from "../../redux/user/user.selectors";

//Import HOC
import Spinner from "../../components/with-spinner/with-spinner.component";


const UtilitiesPage = ({utilityFormStatus, utilities, currentUser, updateUtilities, selectUtilitiesPage}) => {
    const [utilitiesState, setUtilitiesState] = useState({isLoading: true});
    const {isLoading} = utilitiesState;

    useEffect(() => {
        const collectionRef = db.collection(`documents/${currentUser.uid}/utilities`);
        collectionRef.onSnapshot(async snapshot => {
            const transformedData = transformUtilities(snapshot);
            await updateUtilities(transformedData);
            setUtilitiesState({isLoading: false});
        });
        selectUtilitiesPage('Home Utilities');
    }, [updateUtilities, currentUser, selectUtilitiesPage]);

    return (
        <UtilitiesPageContainer>
            <AddUtilities/>
            <UtilitiesPageItems>
                {

                    isLoading ? <Spinner/> : utilities.map(utility => {
                        return <Utility key={utility.utility_name}
                                        utility_name={utility.utility_name}
                                        utility_client_code={utility.utility_client_code}
                                        utility_address={utility.utility_address}
                                        utility_index_period={utility.utility_index_period_array}
                                        utility_payment_deadline={utility.utility_deadline}/>
                    })
                }
            </UtilitiesPageItems>


            {/*Utility creation form*/}
            {
                utilityFormStatus ? <UtilityCreationWindow/> : null
            }

        </UtilitiesPageContainer>
    );
};

const mapStateToProps = createStructuredSelector(
    {
        utilityFormStatus: selectUtilityFormStatus,
        utilities: selectUtilityList,
        currentUser: selectCurrentUser
    }
);

const mapDispatchToProps = (dispatch) => {
    return {
        updateUtilities: (utilities) => dispatch(updateUtilities(utilities)),
        selectUtilitiesPage: (title) => dispatch(isSelectedUtilities(title))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UtilitiesPage);