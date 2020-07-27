import React, {useEffect} from "react";
import {connect} from 'react-redux';

//import action
import {isSelectedDebts} from "../../redux/selected_pages/selected_pages.action.creator";


const DebtPage = ({selectDebtsPage}) => {
    useEffect(() => {
        selectDebtsPage('Imprumuturi')
    }, [selectDebtsPage]);

    return (
        <div>Debt Page hgfkyuger geger erc erc re ce c ec e ce ce c e ce c re</div>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        selectDebtsPage: (title) => dispatch(isSelectedDebts(title))
    }
};

export default connect(null, mapDispatchToProps)(DebtPage);