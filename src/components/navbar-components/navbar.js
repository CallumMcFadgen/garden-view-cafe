import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

class NavBar extends Component {    //page header bar with logo/title, active navigation links and active social media links         
  render() {
    return (
      <header className="header-ui">
        <div className="header-title">
          The Garden View Cafe
        </div>
        <div className="links-ui">
          <span><Link className="link" to="">Home</Link></span>
          <span className="navbar-spacers"> / </span>
          <span><Link className="link" to="./menu-page" >Menu</Link></span>
          <span className="navbar-spacers"> / </span>
          <span><Link className="link" to="./events-page">Events</Link></span>
          <span className="navbar-spacers"> / </span>
          <span><Link className="link" to="./gallery-page">Gallery</Link></span>
          <span className="navbar-spacers"> / </span>
          <span><Link className="link" to="./contact-page">Contact</Link></span>
        </div>
        <div className="header-sm-icons-ui">
          <SocialIcon network="facebook" url="https://www.facebook.com" style={{ height: 20, width: 20 }} bgColor="#4d4d4d" />
          <span className="footer-sm-icon-spacing">  </span>
          <SocialIcon network="twitter" url="https://twitter.com" style={{ height: 20, width: 20 }} bgColor="#4d4d4d" />
          <span className="footer-sm-icon-spacing">  </span>
          <SocialIcon network="instagram" url="https://www.instagram.com" style={{ height: 20, width: 20 }} bgColor="#4d4d4d" />
          <span className="footer-sm-icon-spacing">  </span>
          <SocialIcon network="pinterest" url="https://www.pinterest.nz" style={{ height: 20, width: 20 }} bgColor="#4d4d4d" />
        </div>
      </header>
    )
  }
}

//ReactDOM.render(<NavBar />,document.querySelector('#root'));

export default NavBar;