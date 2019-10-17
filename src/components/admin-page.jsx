// Package Dependences
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'reactstrap';

import MenuItemForm from './forms/update-menu-form';

class AdminPage extends Component {
    render() {
      return (
        <div>
          <Row>
            <Col className="image-col-banner">
              <img className="banner-image" src="./images/banners/banner-img.png" alt="contact page banner" />
              <h1 className="banner-text">Admin</h1>
            </Col>
          </Row>
         <Row>
           <Col>
              <MenuItemForm />
           </Col>
         </Row>
         </div>
      )
    }
  }
    
  ReactDOM.render(<AdminPage />,document.querySelector('#root'));
  
  export default AdminPage;