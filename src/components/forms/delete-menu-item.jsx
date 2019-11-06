// Package Dependences
import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


// On this page I am disabling the button submit event so that I can use it to bind
// the users input to the variable 'this'.  I then reset the input box and use the
// item name taken from the user input (bound to 'this') to send a delete method with 
// an updated URL that contains the name of the item to be deleted.


class DeleteMenuItemForm extends React.Component {

  
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this)
  };


  handleSubmit(event) {
    event.preventDefault();

    let menu_item_name = this.menu_item_name.value;
    let updatedURL = ('http://localhost:4200/api/menu-items/'&menu_item_name)

    fetch(updatedURL, {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(() => {
        alert("Menu item has been deleted")
        this.ResetForm();
      })
      .catch(err => {
        console.log(err)
      })
  };


  ResetForm = () => {
    this.menu_item_name.value = null;
  };


  render() {
    return (
      <Form className="delete-item-form" onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input type="input" name="menu_item_name" id="menu_item_name" placeholder="enter an item name" required innerRef={(input) => { this.menu_item_name = input }} />
        </FormGroup>
        <br />
        <Button color="secondary" type="submit" value="Add to menu" >REMOVE FROM MENU</Button>{' '}
      </Form>
    )
  };
};


export default DeleteMenuItemForm;
