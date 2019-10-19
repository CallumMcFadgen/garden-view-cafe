// Package Dependences
import React from 'react';
import { Form, FormGroup, Label, Input, Button, FormText } from 'reactstrap';

class NewMenuItemForm extends React.Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();           // prevent the buttons default behaviour

    fetch('http://localhost:4200/api/menu-items', {         // get the data
      method: 'post',                                       // use the post method
      headers: { 'Content-Type': 'application/json' },       // set json header
      body: JSON.stringify({                                // turn the contents to a json string
        "menu_item_name": this.menu_item_name.value,                  // the value of the input 
        "menu_item_description": this.menu_item_description.value,
        "menu_item_price": this.menu_item_price.valueAsNumber,
        "menu_item_available": this.menu_item_available.checked,        // checked for check boxes
        "menu_item_gluten_free": this.menu_item_gluten_free.checked,
        "menu_item_vegan": this.menu_item_vegan.checked,
        "menu_item_breakfast": this.menu_item_breakfast.checked,
        "menu_item_lunch": this.menu_item_lunch.checked,
        "menu_item_dinner": this.menu_item_dinner.checked,
        "menu_item_function": this.menu_item_function.checked,
        "admin_id": 1                                                 // hardcoded admin (will change in future)
      })
    })
      .then(() => {
        console.log("New menu item added");
        this.ResetForm();
      })
      .catch(err => {
        console.log(err)
      })
  }

  ResetForm = () => {
    this.menu_item_name.value = null;
    this.menu_item_description.value = null;
    this.menu_item_price.value = null;
    this.menu_item_available.checked = false;
    this.menu_item_gluten_free.checked = false;
    this.menu_item_vegan.checked = false;
    this.menu_item_breakfast.checked = false;
    this.menu_item_lunch.checked = false;
    this.menu_item_dinner.checked = false;
    this.menu_item_function.checked = false;
}
  
  render() {
    return (
      <Form name="new-menu-item-form" className="form" onSubmit={this.handleSubmit}>
        <div className="form-heading">Add Menu Item</div>
        <FormGroup>
          <Label>Name</Label>
          <Input type="input" name="menu_item_name" id="menu_item_name" placeholder="enter an item name" required innerRef={(input) => { this.menu_item_name = input }} />
        </FormGroup>
        <FormGroup>
          <Label>Description</Label>
          <Input type="textarea" name="menu_item_description" id="menu_item_description" placeholder="enter an item description" innerRef={(input) => { this.menu_item_description = input }} />
        </FormGroup>
        <FormGroup>
          <Label>Price</Label>
          <Input type="number" name="menu_item_price" id="menu_item_price" placeholder="enter an item price" required  innerRef={(input) => { this.menu_item_price = input }} />
        </FormGroup>
        <FormGroup check>
          <Label check >
            <Input type="checkbox" innerRef={(input) => { this.menu_item_available = input }} />{' '}
            Available
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" innerRef={(input) => { this.menu_item_gluten_free = input }} />{' '}
            Gluten free
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" innerRef={(input) => { this.menu_item_vegan = input }} />{' '}
            Vegan
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" innerRef={(input) => { this.menu_item_breakfast = input }} />{' '}
            Breakfast
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" innerRef={(input) => { this.menu_item_lunch = input }} />{' '}
            Lunch
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" innerRef={(input) => { this.menu_item_dinner = input }} />{' '}
            Dinner
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" innerRef={(input) => { this.menu_item_function = input }} />{' '}
            Functions
          </Label>
        </FormGroup>
        <br />
        <Button color="secondary" type="submit" value="Add to menu" >ADD TO MENU</Button>{' '}
      </Form>
    );
  }
}

export default NewMenuItemForm;
