import React, { Component } from 'react';

class Nav extends Component {

  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed"
              data-toggle="collapse" data-target="#navbar" aria-expanded="false"
              aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">Jajal</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse navbar-right navbar-form">
            <button className="btn btn-success">Sign in</button>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
