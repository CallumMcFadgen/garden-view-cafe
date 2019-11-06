import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Row, Col} from 'reactstrap';


class RegisterForm extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <div className="register-heading">Register</div>
                </Row>
                <Form name="register-form" className="register-form" onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label>First Name</Label>
                        <Input type="input" name="first_name" id="first_name" placeholder="enter your first name" required innerRef={(input) => {  }} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Last Name</Label>
                        <Input type="input" name="last-name" id="last-name" placeholder="enter your last name" required innerRef={(input) => { }} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Username</Label>
                        <Input type="input" name="username" id="username" placeholder="enter your username" required innerRef={(input) => { }} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input type="input" name="password" id="password" placeholder="enter your password" required innerRef={(input) => { }} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type="input" name="email" id="email" placeholder="enter your email address" required innerRef={(input) => { }} />
                    </FormGroup>
                    <br />
                    <div className="contact-submit-button">
                        <Button color="secondary" type="submit" value="Login" >Register</Button>{' '}
                    </div>
                </Form>
            </React.Fragment>
        )
    };
};

export default RegisterForm;