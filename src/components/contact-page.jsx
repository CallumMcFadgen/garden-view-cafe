// Package Dependences
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'reactstrap';

// Local Dependences
import ContactPhone from './contact-info/ph-numbers';
import ContactEmails from './contact-info/email-addresses';
import ContactBizHours from './contact-info/biz-hours';
import ContactLocation from './contact-info/location';
import ContactForm from './forms/contact-form';
import GoogleMap from './google-map/google-map';

class ContactPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col className="image-col-banner">
            <img className="banner-image" src="./images/banners/banner-img.png" alt="contact page banner" />
            <h1 className="banner-text">Contact</h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="12" md="12" lg="12" xl="12">
            <h3 className="contact-info-heading">Contact Us</h3>
          </Col>
          <Col xs="12" sm="12" md="6" lg="3" xl="3">
            <ContactPhone />
          </Col>
          <Col xs="12" sm="12" md="6" lg="3" xl="3">
            <ContactEmails />
          </Col>
          <Col xs="12" sm="12" md="6" lg="3" xl="3">
            <ContactBizHours />
          </Col>
          <Col xs="12" sm="12" md="6" lg="3" xl="3">
            <ContactLocation />
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="12" md="6" lg="6" xl="6" >
            <ContactForm />
          </Col>
          <Col xs="12" sm="12" md="6" lg="6" xl="6">
            <GoogleMap />
          </Col>
        </Row>
        <Row className="pre-footer-spacing">
        </Row>
      </React.Fragment>
    )
  };
};

ReactDOM.render(<ContactPage />, document.querySelector('#root'));

export default ContactPage;