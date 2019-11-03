// Package Dependences
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Local Dependences

class RegisterPage extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Login</h1>
            </React.Fragment>
        )
    };
};

ReactDOM.render(<RegisterPage />, document.querySelector('#root'));

export default RegisterPage;