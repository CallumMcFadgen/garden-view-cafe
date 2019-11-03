// Package Dependences
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Local Dependences

class LoginPage extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Login</h1>
            </React.Fragment>
        )
    };
};

ReactDOM.render(<LoginPage />, document.querySelector('#root'));

export default LoginPage;