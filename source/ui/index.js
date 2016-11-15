import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import reducer from '../components/reducer'

import App from '../components/app'

const stateDefault = {};

const store = createStore(reducer, stateDefault);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('mount-point')
);