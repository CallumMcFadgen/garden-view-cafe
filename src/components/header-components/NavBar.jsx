import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NavBar extends Component {
  render() {
    return (
      <header className="header-ui">
        <div className="navbar-links">
          <span className="navButton"><Link to="">Home</Link></span>
          <span className="navbar-spacers"> / </span>
          <span className="navButton"><Link to="./MenuPage">Menu</Link></span>
          <span className="navbar-spacers"> / </span>
          <span className="navButton"><Link to="./EventsPage">Events</Link></span>
          <span className="navbar-spacers"> / </span>
          <span className="navButton"><Link to="./GalleryPage">Gallery</Link></span>
          <span className="navbar-spacers"> / </span>
          <span className="navButton"><Link to="./ContactPage">Contact</Link></span>
        </div>
      </header>
    )
  }
}



export default NavBar;