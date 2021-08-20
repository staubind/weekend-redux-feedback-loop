import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger'


// reducers

const store = createStore(  
    combineReducers({
        //reducers
    }),
    applyMiddleware(logger)
);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
