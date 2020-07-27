import React, {useEffect} from 'react';

//Imported Routing components
import {Switch, Route, Redirect} from 'react-router-dom';

//Imported components
import Header from "./components/header/header.component";
import WelcomePage from "./pages/welcome_page/welcome_page.component";
import SignIn from "./pages/sign_in_page/sign-in.component";
import SignUp from "./pages/sign_up_page/sign-up.component";
import MainMenuPage from "./pages/main_menu_page/main_menu_page.component";
import DebtPage from "./pages/debt_page/debt.component";
import UtilitiesPage from "./pages/utilities_page/utilities_page.component";
import NavDrawer from "./components/nav_drawer/nav_drawer.component";

//Import from firebase
import {auth, createUserProfile} from "./firebase/firebase.utils";

//Import HOC
import {connect} from 'react-redux';

//Import from Redux
import {googleSignIn} from "./redux/user/user.action.creator";

//Import from selector and reselect
import {selectCurrentUser} from "./redux/user/user.selectors";
import {createStructuredSelector} from "reselect";


const App = ({currentUser, setCurrentUser}) => {
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            user ? console.log(user.displayName) : console.log('User is signed out');
            setCurrentUser(user);
            createUserProfile(user);
        })
    }, [setCurrentUser]);


    return (
        <div className="App">
            <Header/>
            <NavDrawer/>
            <Switch>
                <Route path={'/signin'} render={() => currentUser ? <Redirect to={'/'}/> : <SignIn/>}/>
                <Route path={'/utilities_page'} component={UtilitiesPage}/>
                <Route path={'/debts_page'} component={DebtPage}/>
                <Route path={'/signup'} render={() => currentUser ? <Redirect to={'/'}/> : <SignUp/>}/>
                <Route path={'/'} render={() => currentUser ? <MainMenuPage/> : <WelcomePage/>}/>
            </Switch>
        </div>
    )

};

const mapStateToProps = createStructuredSelector(
    {
        currentUser: selectCurrentUser,
    }
);

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentUser: (user) => dispatch(googleSignIn(user))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
