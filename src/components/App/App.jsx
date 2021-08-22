import React from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter, Route, Link} from 'react-router-dom';
import FormItem from '../FormItem/FormItem';
import Review from '../Review/Review';
// import {useHistory} from 'react-router-dom'
import SuccessMessage from '../SuccessMessage/SuccessMessage'
import { Button } from '@material-ui/core'

function App() {

  // const history = useHistory();

  const submitFeedback = (feedbackData) => {
    console.log('in submitFeedback just before axios. feedback is: ', feedbackData);
    axios({
      method: 'POST',
      url: '/feedback',
      data: feedbackData
  }).then(response => {
    console.log('Successfully posted to db');
    // move us along to the SUBMISSION SUCCESS page
    // console.log('history: ', history);
    // confused why I can't do the switch with history here.
    // history.push('/submitted');
  }).catch(error => {
    console.log('Failed to POST: ', error);
    alert('Failed to Post. See console for details.');
  })
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <HashRouter>

      <Route path="/" exact>
      <h3>Would You Mind Giving Us Some Feedback?</h3>
      <Link to="/feeling"><Button>Offer Feedback</Button></Link>
      </Route>

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
          next="/support"
          reducer="ADD_UNDERSTANDING"
          back="/feeling"
        />
      </Route>

      <Route path="/support">
        <FormItem 
          question="How well are you being supported?" 
          type="number" 
          required={true} 
          next="/comments"
          reducer="ADD_SUPPORT"
          back="understanding"
        />
      </Route>

      <Route path="/comments">
        <FormItem 
          question="Any comments you want to leave?" 
          type="text" 
          required={false} 
          next="/review"
          reducer="ADD_COMMENTS"
          back="support"
        />
      </Route>

      <Route path="/review">
        <Review submitFeedback={submitFeedback}/>
      </Route>

      <Route path="/submitted">
        <SuccessMessage />
      </Route>


      </HashRouter>

    </div>
  );
}

export default App;
