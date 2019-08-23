import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NavBar extends Component {
  render() {
    return (
      <header className="header-ui">
        <div className="header-title">
          The Garden View Cafe
        </div>
        <div className="navbar-links">
          <span><Link className ="link" to="">Home</Link></span>
          <span className="navbar-spacers"> / </span>
          <span><Link className ="link" to="./MenuPage" >Menu</Link></span>
          <span className="navbar-spacers"> / </span>
          <span><Link className ="link" to="./EventsPage">Events</Link></span> 
          <span className="navbar-spacers"> / </span>
          <span><Link className ="link" to="./GalleryPage">Gallery</Link></span>
          <span className="navbar-spacers"> / </span>
          <span><Link className ="link" to="./ContactPage">Contact</Link></span>
        </div>
      </header>
    )
  }
}



export default NavBar;