// Package Dependences
import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

class MenuItemForm extends React.Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch('http://localhost:4200/api/menu-items', {
      method: 'post',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({
        "menu_item_name": this.menu_item_name.value,
        "menu_item_description": this.menu_item_description.value,
        "menu_item_price": this.menu_item_price.value,
        "menu_item_available": this.menu_item_available.checked,
        "admin_id": 1
      }) 
    })
      .then(() => {
        console.log("New menu item added");
        console.log(this.menu_item_name.value);
        console.log(this.menu_item_description.value);
        console.log(this.menu_item_price.value);
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <Form className="update-menu-form" onSubmit={this.handleSubmit}>
        <div className="form-heading">Edit menu items</div>
        <FormGroup>
          <Label>Item name</Label>
          <Input type="input" name="menu_item_name" id="menu_item_name" placeholder="enter a menu item name" innerRef={(input) => { this.menu_item_name = input }} />
        </FormGroup>
        <FormGroup>
          <Label>Item description</Label>
          <Input type="input" name="menu_item_description" id="menu_item_description" placeholder="enter a menu item description" innerRef={(input) => { this.menu_item_description = input }} />
        </FormGroup>
        <FormGroup>
          <Label>Item price</Label>
          <Input type="input" name="menu_item_price" id="menu_item_price" placeholder="enter a menu item price" innerRef={(input) => { this.menu_item_price = input }} />
        </FormGroup>
        <FormGroup check>
          <Label check >
            <Input type="checkbox" innerRef={(input) => { this.menu_item_available = input }} />{' '}
            Item is available
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Item is gluten free
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            item is vegan
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            item is available for breakfast
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            item is available for lunch
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            item is available for dinner
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            item is available for functions
          </Label>
        </FormGroup>
        <br />
        <Input type="submit" value="Add menu item" />
      </Form>
    );
  }
}










export default MenuItemForm;
