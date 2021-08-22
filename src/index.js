import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger'


// reducers
const feeling = (state = 0, action) => {
    // if (action.type === 'ADD_FEELING') {
    //     return action.payload;
    // }
    // if (action.type === 'CLEAR') {
    //     return 0;
    // }
    switch (action.type) {
        case ('ADD_FEELING'):
            return action.payload;
        case ('CLEAR'):
            return 0;
    }
    return state;
}

const understanding = (state = 0, action) => {
    switch (action.type) {
        case ('ADD_UNDERSTANDING'):
            return action.payload;
        case ('CLEAR'):
            return 0;
    };
    return state;
}

const support = (state = 0, action) => {
    switch (action.type) {
        case ('ADD_SUPPORT'):
            return action.payload;
        case ('CLEAR'):
            return 0;
    };
    return state;
}

const comments = (state = '', action) => {
    switch (action.type) {
        case ('ADD_COMMENTS'):
            return action.payload;
        case ('CLEAR'):
            return 0;
    };
    return state;
}

const store = createStore(  
    combineReducers({
        //reducers
        feeling,
        understanding,
        support,
        comments
    }),
    applyMiddleware(logger)
);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
