import React from 'react';
import ReactDOM from 'react-dom';
import Sentence from './components/Sentence';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

const Root = () => {
  return (
    <div className="container">
      <Router>
        <Route path="/" component={Sentence}/>
      </Router>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
