//Dependences
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class ErrorPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="banner-ui" >
          <img className="banner-image" src="./images/banner/banner-img.png" alt="homepage banner" />
          <h1 className="banner-text">Error</h1>
        </div>
        <div>
          <h2 className="text">Content coming soon</h2>
        </div>
      </div>
    )
  }
}
  
ReactDOM.render(<ErrorPage />,document.querySelector('#root'));

export default ErrorPage;