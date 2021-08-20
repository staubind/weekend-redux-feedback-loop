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
    if (action.type === 'ADD_FEELING') {
        return action.payload;
    }
    return state;
}
const understanding = (state = 0, action) => {
    if (action.type === 'ADD_UNDERSTANDING') {
        return action.payload;
    }
    return state;
}
const supported = (state = 0, action) => {
    if (action.type === 'ADD_SUPPORTED') {
        return action.payload;
    }
    return state;
}
const comments = (state = '', action) => {
    if (action.type === 'ADD_COMMENTS') {
        return action.payload;
    }
    return state;
}

const store = createStore(  
    combineReducers({
        //reducers
        feeling,
        understanding,
        supported,
        comments
    }),
    applyMiddleware(logger)
);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
