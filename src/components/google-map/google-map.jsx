// Package Dependences
import React, { Component } from 'react';

class GoogleMap extends Component {
    render() {
      return (
        <React.Fragment>
            <div className="google-map" >
              <h3 className="google-map-heading">Find Us</h3>
              <img className="google-map-image" src="./images/map/map-image.png" alt="map" />
            </div>
        </React.Fragment>
      )
    };
  };
  
  export default GoogleMap;