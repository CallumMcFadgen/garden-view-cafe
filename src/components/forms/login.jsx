// Package Dependences
import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { login } from '../../actions/index';
import store from '../../store';


function mapDispatchToProps(dispatch) {
    return {
        login: account => dispatch(login(account.email, account.password))
    };
}


function mapStateToProps(state) {
    return { email: state.account.email, password: state.account.password };
}



class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.id]:event.target.value })
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.login(this.state);
    }

    render() {
        return (
            <React.Fragment>
                <Form name="login-form" className="login-form" onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label>Username</Label>
                        <Input type="input" name="email" id="email" placeholder="enter your email address" value={this.state.email} onChange={this.handleChange} required innerRef={(input) => { }} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input type="password" name="password" id="password" placeholder="enter your password" value={this.state.password} onChange={this.handleChange} required innerRef={(input) => { }} />
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

const ReduxLoginForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);


export default ReduxLoginForm;