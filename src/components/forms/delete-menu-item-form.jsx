// Package Dependences
import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class DeleteMenuItemForm extends React.Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this)
  };

  handleSubmit(event) {
    event.preventDefault();           // prevent the buttons default behaviour

    let menu_item_name = this.menu_item_name.value;         // assign input to a var
    let updatedURL = ('http://localhost:4200/api/menu-items' + '/' + menu_item_name)                //add the imput to the url

    fetch(updatedURL, {         // get the data
      method: 'delete',                                       // use the delete method
      headers: { 'Content-Type': 'application/json' },       // set json header                              // turn the contents to a json string                 // the value of the input                                                 // hardcoded admin (will change in future)
    })
      .then(() => {
        console.log(updatedURL);
      })
      .catch(err => {
        console.log(err)
      })
  };

  render() {
    return (
      <Form className="form" onSubmit={this.handleSubmit}>
        <div className="form-heading">Delete Menu Item</div>
        <FormGroup>
          <Label>Name</Label>
          <Input type="input" name="menu_item_name" id="menu_item_name" placeholder="enter an item name" re innerRef={(input) => { this.menu_item_name = input }} />
        </FormGroup>
        <br />
        <Button color="secondary" type="submit" value="Add to menu" >REMOVE FROM MENU</Button>{' '}
      </Form>
    )
  }
};

export default DeleteMenuItemForm;
