// Package Dependences
import React from 'react';
import { Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';

// Local Dependences
import { register } from '../../actions/index';


function mapDispatchToProps(dispatch) {
    return {
        register: user => dispatch(register(
            user.firstName, 
            user.lastName, 
            user.password, 
            user.email))
    };
}


function mapStateToProps(state) {
    console.log(state);
    return { 
        firstName: state.user.firstName,
        lastName: state.user.lastName,
        password: state.user.password,
        email: state.user.email};
}


class RegisterForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstName: '',
                lastName: '',
                password: '',
                email: ''
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };


    handleChange(event){
        this.setState({[event.target.name]:event.target.value})
        console.log(event.target.value)
    }


    handleSubmit(event){
        event.preventDefault();
        this.props.register(this.state);
        console.log('REGISTRATION DATA: ' + JSON.stringify(this.state.user))
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
                                type="input"
                                name="firstName"
                                id="firstName"
                                placeholder="enter your first name"
                                value={this.state.firstName}
                                onChange={this.handleChange}
                                required
                                innerRef={(input) => { }} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Last Name</Label>
                            <Input
                                type="input"
                                name="lastName"
                                id="lastName"
                                placeholder="enter your last name"
                                value={this.state.lastName}
                                onChange={this.handleChange}
                                required
                                innerRef={(input) => { }} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="enter your password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                required
                                innerRef={(input) => { }} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input
                                type="input"
                                name="email"
                                id="email"
                                placeholder="enter your email address"
                                value={this.state.email}
                                onChange={this.handleChange}
                                required
                                innerRef={(input) => { }} />
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

    const ReduxRegisterForm = connect(
        mapStateToProps,
        mapDispatchToProps
    )(RegisterForm);


    export default ReduxRegisterForm;


    // register(event) {
    //     event.preventDefault()
    //     console.log('REGISTRATION DATA: ' + JSON.stringify(this.state.user))
    // }


    // getRegoFormInput(attr, event) {
    //     console.log(attr + ' = ' + event.target.value)
    //         let regoFormInput = Object.assign({}, this.state.user)
    //         regoFormInput[attr] = event.target.value
            
    //         this.setState({
    //             user: regoFormInput
    //         })
    //     }