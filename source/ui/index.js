import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import reducer from '../components/reducer'
import stateDefault from '../model/UltimateEquipmentAppState'

import App from '../components/app'

const store = createStore(reducer, stateDefault, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('mount-point')
);
