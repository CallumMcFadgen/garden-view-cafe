// Package Dependences
import React, { Component } from 'react';
import { Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

// Local Dependences
import store from '../../store/store';


class RegisterForm extends Component {

    constructor() {
        super()
        this.state = {
            registrationData: {

            }
        }
    };


    register(event) {
        event.preventDefault()
        console.log('REGISTRATION DATA: ' + JSON.stringify(this.state.registrationData))
    }


    getRegoFormInput(attr, event) {
        console.log(attr + ' = ' + event.target.value)
            let regoFormInput = Object.assign({}, this.state.registrationData)
            regoFormInput[attr] = event.target.value
            
            this.setState({
                registrationData: regoFormInput
            })
        }


        render() {
            return (
                <React.Fragment>
                    <Row>
                        <div className="register-heading">Register</div>
                    </Row>
                    <Form name="register-form" className="register-form" onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label>First Name</Label>
                            <Input
                                onChange={this.getRegoFormInput.bind(this, 'first name')}
                                type="input"
                                name="first_name"
                                id="first_name"
                                placeholder="enter your first name"
                                required
                                innerRef={(input) => { }} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Last Name</Label>
                            <Input
                                onChange={this.getRegoFormInput.bind(this, 'last name')}
                                type="input"
                                name="last-name"
                                id="last-name"
                                placeholder="enter your last name"
                                required
                                innerRef={(input) => { }} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Password</Label>
                            <Input
                                onChange={this.getRegoFormInput.bind(this, 'password')}
                                type="password"
                                name="password"
                                id="password"
                                placeholder="enter your password"
                                required
                                innerRef={(input) => { }} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input
                                onChange={this.getRegoFormInput.bind(this, 'email')}
                                type="input"
                                name="email"
                                id="email"
                                placeholder="enter your email address"
                                required
                                innerRef={(input) => { }} />
                        </FormGroup>
                        <br />
                        <div className="contact-submit-button">
                            <Button onClick={this.register.bind(this)} color="secondary" type="submit" value="Login" >Register</Button>{' '}
                        </div>
                    </Form>
                </React.Fragment>
            )
        };
    };

    export default RegisterForm;