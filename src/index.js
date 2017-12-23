import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import Store from './store'

import { BrowserRouter } from '../node_modules/react-router-dom'

import 'jquery/src/jquery'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'


import App from './App';
import registerServiceWorker from './registerServiceWorker';

const StoreInstance = Store();


ReactDOM.render(
    <Provider store={StoreInstance} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
        , document.getElementById('root'));
registerServiceWorker();
