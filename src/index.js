import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
    count : 0
}

function reducer(state = initialState, action){
    switch(action.type){
        case 'incr':
            return{
                count: state.count + 1
            };
        case 'decr':
            return{
                count: state.count - 1
            };
        default:
            return state;
    }
}

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

