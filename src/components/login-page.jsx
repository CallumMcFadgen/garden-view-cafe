// Package Dependences
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'reactstrap';

// Local Dependences
import LoginForm from './forms/login';


class LoginPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <div className="login-heading">Login</div>
                </Row>
                <Row>
                    <Col xs="12" sm="12" md="12" lg="12" xl="12">
                        <LoginForm />
                    </Col>
                </Row>
                <Row className="pre-footer-spacing">
                </Row>
            </React.Fragment>
        )
    };
};


export default LoginPage;