import React, { Component } from 'react';
import Nav from './Nav';

class Sentence extends Component {

  render() {
    return (
      <div>
        <Nav />
        <h3 className="text-center">Sentences</h3>
        <hr/>

        <div className="col-sm-12">
          <div className="jumbotron text-center">
            <h2>Hello.</h2>
          </div>
        </div>
      </div>
    );
  }
  
}

export default Sentence;
