// Package Dependences
import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';



class ContactForm extends React.Component {


  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this)
  };


  handleSubmit(event) {
    event.preventDefault();
    alert("Thank you for your message, we will be in contact as soon as possibile")
    this.ResetForm();
  };


  ResetForm = () => {
    this.contact_first_name.value = null;
    this.contact_last_name.value = null;
    this.contact_email_address.value = null;
    this.contact_subject.value = false;
    this.contact_message.value = false;
  };


  render() {
    return (
      <React.Fragment>
        <div className="contact-form">
        <div className="form-heading">Message us</div>
          <Form name="contact-form" className="form" onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label>First Name</Label>
              <Input type="input" name="contact_first_name" id="contact_first_name" placeholder="your first name" required innerRef={(input) => { this.contact_first_name = input }} />
            </FormGroup>
            <FormGroup>
              <Label>Last Name</Label>
              <Input type="input" name="contact_last_name" id="contact_last_name" placeholder="your last name" required innerRef={(input) => { this.contact_last_name = input }} />
            </FormGroup>
            <FormGroup>
              <Label>Email Address</Label>
              <Input type="input" name="contact_email_address" id="contact_email_address" placeholder="your email address" required innerRef={(input) => { this.contact_email_address = input }} />
            </FormGroup>
            <FormGroup>
              <Label>Subject</Label>
              <Input type="input" name="contact_subject" id="contact_subject" placeholder="subject of message" required innerRef={(input) => { this.contact_subject = input }} />
            </FormGroup>
            <FormGroup>
              <Label>Message</Label>
              <Input type="textarea" name="contact_message" id="contact_message" placeholder="your message" required innerRef={(input) => { this.contact_message = input }} />
            </FormGroup>
            <br />
            <div className="contact-submit-button">
              <Button color="secondary" type="submit" value="Add to menu" >SEND MESSAGE</Button>{' '}
            </div>
          </Form>
        </div>
      </React.Fragment>
    )
  };
};


export default ContactForm;

