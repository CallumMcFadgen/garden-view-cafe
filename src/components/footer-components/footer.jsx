// Package Dependences
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { SocialIcon } from 'react-social-icons';


class Footer extends Component {    //page Footer with copyright information and active social media links
  render() {
    return (
      <div className="footer">
        <Row>
          <Col xs="4" sm="4" md="4" lg="4" xl="4" className="footer-biz-info">
            <p>
              <strong>LOCATED AT</strong>
              <br />
              <span>208 Bridge Street</span>
              <br />
              <span>Nelson</span>
              <br />
              <br />
              <strong>CONTACT</strong>
              <br />
              <span><strong>Phone -</strong> (03)5739784 </span>
              <br />
              <span><strong>Email -</strong> manager@gvc.co.nz </span>
            </p>
          </Col>
          <Col xs="4" sm="4" md="4" lg="4" xl="4" className="footer-sm-icon">
            <SocialIcon network="facebook" url="https://www.facebook.com" style={{ height: 26, width: 26 }} bgColor="#4d4d4d" />
            <span className="footer-sm-icon-spacing">  </span>
            <SocialIcon network="twitter" url="https://twitter.com" style={{ height: 26, width: 26 }} bgColor="#4d4d4d" />
            <span className="footer-sm-icon-spacing">  </span>
            <SocialIcon network="instagram" url="https://www.instagram.com" style={{ height: 26, width: 26 }} bgColor="#4d4d4d" />
            <span className="footer-sm-icon-spacing">  </span>
            <SocialIcon network="pinterest" url="https://www.pinterest.nz" style={{ height: 26, width: 26 }} bgColor="#4d4d4d" />
          </Col>
          <Col xs="4" sm="4" md="4" lg="4" xl="4" className="footer-biz-info">
            <p>
              <strong>OPEN 7 DAYS</strong>
              <br />
              <span>Monday to Sunday <br /> 8.00am - 9.00pm</span>
              <br />
              <br />
              <strong>LICENSED</strong>
              <br />
              <span>Fully licensed</span>
              <br />
              <span>BYO fees apply</span>
            </p>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Footer;
