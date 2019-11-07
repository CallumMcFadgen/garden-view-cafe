// Package Dependences
import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class LoginForm extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Form name="login-form" className="login-form" onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label>Username</Label>
                        <Input type="input" name="user_name" id="user_name" placeholder="enter your username" required innerRef={(input) => { }} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input type="password" name="password" id="password" placeholder="enter your password" required innerRef={(input) => { }} />
                    </FormGroup>
                    <br />
                    <div className="contact-submit-button">
                        <Button color="secondary" type="submit" value="Login" >Login</Button>{' '}
                    </div>
                    <div className="register-text">Not a member? click <a href="/register-page">here</a> to register</div>
                </Form>
            </React.Fragment>
        )
    };
};

export default LoginForm;