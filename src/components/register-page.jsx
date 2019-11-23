// Package Dependences
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'reactstrap';

// Local Dependences
import RegisterForm from './forms/register';


class RegisterPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col xs="12" sm="12" md="12" lg="12" xl="12">
                        <RegisterForm />
                    </Col>
                </Row>
                <Row className="pre-footer-spacing">
                </Row>
            </React.Fragment>
        )
    };
};


export default RegisterPage;