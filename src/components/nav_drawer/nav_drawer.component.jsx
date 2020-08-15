import React from 'react';
import {connect} from 'react-redux'

//import reselect
import {createStructuredSelector} from "reselect";
import {selectDrawerState} from "../../redux/drawer/drawer.selectors";
import {selectUtilitiesSelected, selectDebtsSelected, selectExpensesSelected} from "../../redux/selected_pages/selected_pages.selectors";


//import actions
import {closeDrawer} from "../../redux/drawer/drawer.action.creator";

//import styles
import {
    NavDrawerContainer,
    NavDrawerCloseButton,
    NavDrawerOption,
    NavDrawerUtilitiesLogo,
    NavDrawerUtilitiesVerticalLine,
    NavDrawerDebtsVerticalLine,
    NavDrawerOptions,
    NavDrawerDebtsLogo,
    NavDrawerExpensesLogo
} from "./nav_drawer.styles";

//import router
import {withRouter} from 'react-router-dom'


const NavDrawer = ({drawerState, closeDrawer, history, match, utilitiesPageSelected, debtsPageSelected, expensesPageSelected}) => {
    return (
        <NavDrawerContainer closed={drawerState}>
            <NavDrawerCloseButton onClick={() => closeDrawer()}>&#10005;</NavDrawerCloseButton>
            <NavDrawerOptions>
                <NavDrawerOption title={'Utilities'}>
                    <NavDrawerUtilitiesLogo onClick={
                        () => {
                            history.push(`${match.url}utilities_page`);
                            closeDrawer();
                            console.log(match.url);
                        }}/>
                    <NavDrawerUtilitiesVerticalLine utilitiesPageSelected={utilitiesPageSelected}/>
                </NavDrawerOption>

                <NavDrawerOption title={'Debt'}>
                    <NavDrawerDebtsLogo onClick={
                        () => {
                            history.push(`${match.url}debts_page`);
                            closeDrawer();
                            console.log(match.url);
                        }}/>
                    <NavDrawerDebtsVerticalLine debtsPageSelected={debtsPageSelected}/>
                </NavDrawerOption>

                <NavDrawerOption title={'Expenses'}>
                    <NavDrawerExpensesLogo onClick={
                        () => {
                            history.push(`${match.url}expenses_page`);
                            closeDrawer();
                            console.log(match.url);
                        }}/>
                    <NavDrawerDebtsVerticalLine debtsPageSelected={expensesPageSelected}/>
                </NavDrawerOption>

            </NavDrawerOptions>
        </NavDrawerContainer>
    )
};

const mapStateToProps = createStructuredSelector(
    {
        drawerState: selectDrawerState,
        utilitiesPageSelected: selectUtilitiesSelected,
        debtsPageSelected: selectDebtsSelected,
        expensesPageSelected:selectExpensesSelected
    }
);

const mapDispatchToProps = (dispatch) => {
    return {
        closeDrawer: () => dispatch(closeDrawer())
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavDrawer));