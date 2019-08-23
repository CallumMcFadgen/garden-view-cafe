import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NavBar extends Component {
  render() {
    return (
      <header>
        <ul id="navBarLinks">
          <li className="navButton"><Link to="">Home</Link></li>
          <li className="navButton"><Link to="./MenuPage">Menu</Link></li>
          <li className="navButton"><Link to="./EventsPage">Events</Link></li>
          <li className="navButton"><Link to="./GalleryPage">Gallery</Link></li>
          <li className="navButton"><Link to="./ContactPage">Contact</Link></li>
        </ul>
      </header>
    )
  }
}



export default NavBar;