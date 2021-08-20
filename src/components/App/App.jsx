import React from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter, Route} from 'react-redux';
import FormItem from '../FormItem/FormItem'
function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <HashRouter>
      <Route path="/feeling"><FormItem question="How are you feeling?" type="text" required={true} /></Route>
      <Route path="/understanding"></Route>
      <Route path="/supported"></Route>
      <Route path="/comments"></Route>

      </HashRouter>

    </div>
  );
}

export default App;
