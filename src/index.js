import React from 'react';
import ReactDOM from 'react-dom';
import App from './assets/components/App';

import {BrowserRouter,Route} from "react-router-dom";
import {Provider} from "react-redux"
import store from "./assets/store/store"


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route component={App}/>
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));
