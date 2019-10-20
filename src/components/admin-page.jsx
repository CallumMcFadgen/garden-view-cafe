// Package Dependences
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'reactstrap';

// Local Dependences
import NewMenuItemForm from './forms/new-menu-item-form';
import UpdateMenuItemForm from './forms/update-menu-item-form';
import DeleteMenuItemForm from './forms//delete-menu-item-form';


// The admin page will have forms for Add/Update/Delete on the various database 
// tables (menu_items, item_reviews, events, events_reviews, etc).  Currently it
// is only supporting the menu_items.


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
            <NewMenuItemForm />
          </Col>
        </Row>

        <Row>
          <Col>
            <UpdateMenuItemForm />
          </Col>
        </Row>

        <Row>
          <Col>
            <DeleteMenuItemForm />
          </Col>
        </Row>
      </div>
    )
  };
};


ReactDOM.render(<AdminPage />, document.querySelector('#root'));


export default AdminPage;