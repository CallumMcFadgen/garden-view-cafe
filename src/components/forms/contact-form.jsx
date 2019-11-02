// Package Dependences
import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



class ContactForm extends React.Component {


  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this)
  };


  handleSubmit(event) {
    event.preventDefault();

    // fetch('http://localhost:4200/api/menu-items', {
    //   method: 'post',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     "menu_item_name": this.menu_item_name.value,
    //     "menu_item_description": this.menu_item_description.value,
    //     "menu_item_price": this.menu_item_price.valueAsNumber,
    //     "menu_item_available": this.menu_item_available.checked,
    //     "menu_item_gluten_free": this.menu_item_gluten_free.checked,
    //     "menu_item_vegan": this.menu_item_vegan.checked,
    //     "menu_item_breakfast": this.menu_item_breakfast.checked,
    //     "menu_item_lunch": this.menu_item_lunch.checked,
    //     "menu_item_dinner": this.menu_item_dinner.checked,
    //     "menu_item_function": this.menu_item_function.checked,
    //     "admin_id": 1
    //   })
    // })
    //   .then(() => {
            alert("Thank you for your message, we will be in contact as soon as possibile")
            this.ResetForm();
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
  };


  ResetForm = () => {
    this.contact_first_name.value = null;
    this.contact_last_name.value = null;
    this.contact_email_address.value = null;
    this.contact_subject.value = false;
    this.contact_message.value = false;
//     this.menu_item_vegan.checked = false;
//     this.menu_item_breakfast.checked = false;
//     this.menu_item_lunch.checked = false;
//     this.menu_item_dinner.checked = false;
//     this.menu_item_function.checked = false;
};

  
  render() {
    return (
      <Form name="new-menu-item-form" className="form" onSubmit={this.handleSubmit}>
        <div className="form-heading">Send us a message</div>
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
          <Input type="input"name="contact_email_address" id="contact_email_address" placeholder="your email address" required  innerRef={(input) => { this.contact_email_address = input }} />
        </FormGroup>
        <FormGroup>
        <Label>Subject</Label>
          <Input type="input"name="contact_subject" id="contact_subject" placeholder="subject of message" required  innerRef={(input) => { this.contact_subject = input }} />
        </FormGroup>
        <FormGroup>
        <Label>Message</Label>
          <Input type="textarea" name="contact_message" id="contact_message" placeholder="your message" required  innerRef={(input) => { this.contact_message = input }} />
        </FormGroup>
        <br />
        <div className="contact-submit-button">
        <Button color="secondary" type="submit" value="Add to menu" >SEND MESSAGE</Button>{' '}
        </div>
      </Form>
    )
  };
};


export default ContactForm;

