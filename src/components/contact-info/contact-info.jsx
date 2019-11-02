// Package Dependences
import React, { Component } from 'react';

class ContactInfo extends Component {
    render() {
      return (
        <React.Fragment>
            <h4>Contact </h4>
            <div className="google-map" >
              <h3 className="google-map-heading">Find Us</h3>
              <img className="google-map-image" src="./images/map/map-image.png" alt="map" />
            </div>
        </React.Fragment>
      )
    };
  };
  
  export default ContactInfo;