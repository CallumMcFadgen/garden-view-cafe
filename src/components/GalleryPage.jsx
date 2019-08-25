//Dependences
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class GalleryPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="banner-ui" >
          <img className="banner-image" src="./images/banner/banner-img.png" alt="homepage banner image" />
          <h1 className="banner-text">Gallery</h1>
        </div>
        <div>
          <h2 className="text">Content coming soon</h2>
        </div>
      </div>
    )
  }
}
  
ReactDOM.render(<GalleryPage />,document.querySelector('#root'));
  
export default GalleryPage;