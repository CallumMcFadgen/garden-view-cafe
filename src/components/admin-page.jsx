// Package Dependences
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'reactstrap';

// Local Dependences
import NewMenuItemForm from './forms/new-menu-item-form';
import UpdateMenuItemForm from './forms/update-menu-item-form';
import DeleteMenuItemForm from './forms/delete-menu-item-form';
import UpdateTest from './forms/update-menu-item-test';

class AdminPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col className="image-col-banner">
            <img className="banner-image" src="./images/banners/banner-img.png" alt="contact page banner" />
            <h1 className="banner-text">Admin</h1>
          </Col>
        </Row>
          <h4 className="admin-form-heading">Add New Menu Item</h4>
        <Row>
          <Col>
            <NewMenuItemForm />
          </Col>
        </Row>
          <div className="admin-form-heading">Edit Menu Item</div>
        <Row>
          <Col>
            <UpdateMenuItemForm />
          </Col>
        </Row>
          <div className="admin-form-heading">Delete Menu Item</div>
        <Row>
          <Col>
            <DeleteMenuItemForm />
          </Col>
        </Row>
          <div className="admin-form-heading">Edit Menu Items</div>
        <Row>
          <Col>
            <UpdateTest />
          </Col>
        </Row>
      </React.Fragment>
    )
  };
};

ReactDOM.render(<AdminPage />, document.querySelector('#root'));

export default AdminPage;