import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory } from 'react-router';

//Components
import Login from "./components/login";
import LoggedIn from "./components/loggedIn";

// Store and Redux
import {createStore} from "redux";
import allReducers from "./reducer/index";
import {Provider} from "react-redux";
import { syncHistoryWithStore } from 'react-router-redux'

// Constants
const app = document.getElementById("app");
const store = createStore(allReducers);
const history = syncHistoryWithStore(hashHistory, store);

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// Render
ReactDOM.render((
    <MuiThemeProvider>
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={Login}/>
                <Route path="/todo" component={LoggedIn}/>
            </Router>
        </Provider>
    </MuiThemeProvider>
), app);