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
            </React.Fragment>
        )
    };
};


ReactDOM.render(<RegisterPage />, document.querySelector('#root'));
export default RegisterPage;