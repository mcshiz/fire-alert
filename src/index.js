import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import Store from './store'

import { Router } from 'react-router-dom'
import history from './history'

import {$, jQuery} from 'jquery/src/jquery'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'


import App from './App';
import registerServiceWorker from './registerServiceWorker';

const StoreInstance = Store();


ReactDOM.render(
    <Provider store={StoreInstance} >
        <Router history={history}>
            <App />
        </Router>
    </Provider>
        , document.getElementById('root'));
registerServiceWorker();
