import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

class Footer extends Component {    //page Footer with copyright information and active social media links
  render() {
    return (
      <footer className="footer-ui">
        <div>
          <div className="copyright-ui">
            <span classname="copyright-text">©2019 The Garden View Cafe</span>
          </div>
          <div className="footer-sm-icons-ui" >
            <SocialIcon network="facebook" url="https://www.facebook.com" style={{ height: 26, width: 26 }} bgColor="#4d4d4d" />
            <span className="footer-sm-icon-spacing">  </span>
            <SocialIcon network="twitter" url="https://twitter.com" style={{ height: 26, width: 26 }} bgColor="#4d4d4d" />
            <span className="footer-sm-icon-spacing">  </span>
            <SocialIcon network="instagram" url="https://www.instagram.com" style={{ height: 26, width: 26 }} bgColor="#4d4d4d" />
            <span className="footer-sm-icon-spacing">  </span>
            <SocialIcon network="pinterest" url="https://www.pinterest.nz" style={{ height: 26, width: 26 }} bgColor="#4d4d4d" />
          </div>
        </div>
      </footer>
    )
  }
}


ReactDOM.render(<Footer />, document.querySelector('#root'));

export default Footer;
