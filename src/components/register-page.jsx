// Package Dependences
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

// Local Dependences
import RegisterForm from './forms/register';


// Register page contains a register form
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