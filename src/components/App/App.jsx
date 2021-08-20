import React from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import FormItem from '../FormItem/FormItem'
function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <HashRouter>
      <Route path="/feeling">
        <FormItem 
          question="How are you feeling?" 
          type="number" 
          required={true}
          next="/understanding"  
          reducer="ADD_FEELING"
        />
        </Route>

      <Route path="/understanding">
      <FormItem 
        question="How well are you understanding the content?" 
        type="number" 
        required={true} 
        next="/supported"
        reducer="ADD_UNDERSTANDING"
        />
      </Route>

      <Route path="/supported">
      <FormItem 
        question="How well are you being supported?" 
        type="number" 
        required={true} 
        next="/comments"
        reducer="ADD_SUPPORTED"
      />
      </Route>

      <Route path="/comments">
      <FormItem 
        question="How well are you understanding the content?" 
        type="text" 
        required={false} 
        next="/review"
        reducer="ADD_COMMENTS"
      />
      </Route>


      <Route path="/review">

      </Route>


      </HashRouter>

    </div>
  );
}

export default App;
