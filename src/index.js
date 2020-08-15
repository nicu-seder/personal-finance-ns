import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

//Importing routing
import {BrowserRouter as Router} from 'react-router-dom'

//Importing redux store
import {store, persiststore} from "./redux/store/store";
import {Provider} from 'react-redux';
import {PersistGate} from "redux-persist/integration/react";

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <Router>
                <PersistGate persistor={persiststore}>
                    <App/>
                </PersistGate>
            </Router>
        </React.StrictMode>
    </Provider>
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
