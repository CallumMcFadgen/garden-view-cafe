//Dependences
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class EventsPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="banner-ui" >
          <img className="banner-image" src="./images/banner/banner-img.png" alt="homepage banner image" />
          <h1 className="banner-text">Events</h1>
        </div>
      </div>
    )
  }
}
  
ReactDOM.render(<EventsPage />,document.querySelector('#root'));
  
export default EventsPage;