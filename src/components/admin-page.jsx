// Package Dependences
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'reactstrap';

// Local Dependences
import NewMenuItemForm from './forms/new-menu-item';
// import UpdateMenuItemForm from './forms/update-menu-item';
import DeleteMenuItemForm from './forms/delete-menu-item';
import UpdateTest from './forms/update-menu-item-test';

import AdminMenuTile from './admin/admin-menu-tile';
import AdminItemReviewsTile from './admin/admin-item-reviews-tile';
import AdminEventsTile from './admin/admin-events-tile';
import AdminEventReviewsTile from './admin/admin-event-reviews-tile';
import AdminUserTile from './admin/admin-users-tile';
import AdminPlaceholderTile from './admin/admin-placeholder-tile';




class AdminPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col className="image-col-banner">
            <img className="banner-image" src="./images/banners/banner-img.png" alt="contact page banner" />
            <h1 className="banner-text">Admin</h1>
          </Col>
          <Row>
            <Col xs="12" sm="6" md="6" lg="3" xl="3">
              <AdminMenuTile />
            </Col>
            <Col xs="12" sm="6" md="6" lg="3" xl="3">
              <AdminItemReviewsTile />
            </Col>
            <Col xs="12" sm="6" md="6" lg="3" xl="3">
              <AdminEventsTile />
            </Col>
            <Col xs="12" sm="6" md="6" lg="3" xl="3">
              <AdminEventReviewsTile />
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="6" md="6" lg="3" xl="3">
              <AdminUserTile />
            </Col>
            <Col xs="12" sm="6" md="6" lg="3" xl="3">
              <AdminPlaceholderTile />
            </Col>
            <Col xs="12" sm="6" md="6" lg="3" xl="3">
              <AdminPlaceholderTile />
            </Col>
            <Col xs="12" sm="6" md="6" lg="3" xl="3">
              <AdminPlaceholderTile />
            </Col> 
          </Row>
          <Row className="pre-footer-spacing">
          </Row>
        </Row>
      </React.Fragment>
    )
  };
};


ReactDOM.render(<AdminPage />, document.querySelector('#root'));
export default AdminPage;

//             <UpdateMenuItemForm />