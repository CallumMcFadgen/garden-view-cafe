// Package Dependences
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'reactstrap';

// Local Dependences

class RegisterPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col>
                        <h1>Register</h1>
                    </Col>
                </Row>
            </React.Fragment>
        )
    };
};


ReactDOM.render(<RegisterPage />, document.querySelector('#root'));
export default RegisterPage;