// Package Dependences
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'reactstrap';

// Local Dependences
import ContactForm from './forms/contact-form';


// The contact page will hold a contact form, a maps plugin, biz info, etc.  
// I am just setting a page nav bar, page banner, placeholder text and a 
// footer.  Hopefully more content will be in soon.


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
          <Col xs="12" sm="12" md="12" lg="6" xl="6" >
            <ContactForm />
          </Col>
          <Col xs="12" sm="12" md="12" lg="6" xl="6" >
            TEST
          </Col>
        </Row>

        <Row>
          <Col className="test-border">
            test
          </Col>
        </Row>






      </React.Fragment>
    )
  };
};

ReactDOM.render(<ContactPage />, document.querySelector('#root'));

export default ContactPage;