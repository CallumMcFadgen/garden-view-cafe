// Package Dependences
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


// The error page will hold a generic error message, 
// it is intended to handle errors but is not currently 
// implemented.


class ErrorPage extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Error</h1>
          <h4>page not found</h4>
        </div>
      </div>
    )
  };
};


ReactDOM.render(<ErrorPage />, document.querySelector('#root'));


export default ErrorPage;