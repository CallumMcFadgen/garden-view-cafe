// Package Dependences
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

// Local Dependences
import NewMenuItemForm from './forms/new-menu-item';
// import UpdateMenuItemForm from './forms/update-menu-item';
import DeleteMenuItemForm from './forms/delete-menu-item';
import UpdateTest from './forms/update-menu-item-test';


class AdminMenuPage extends Component {
    render() {
        return (
            <React.Fragment>
                <h4 className="admin-form-heading">Add new menu item</h4>
                <Row>
                    <Col>
                        <NewMenuItemForm />
                    </Col>
                </Row>
                <div className="admin-form-heading">Edit menu items</div>
                <Row>
                    <Col>
                        <UpdateTest />
                    </Col>
                </Row>
                <div className="admin-form-heading">Delete Menu Items</div>
                <Row>
                    <Col>
                        <DeleteMenuItemForm />
                    </Col>
                </Row>
                <Row className="pre-footer-spacing">
                </Row>
            </React.Fragment>
        )
    };
};


export default AdminMenuPage;