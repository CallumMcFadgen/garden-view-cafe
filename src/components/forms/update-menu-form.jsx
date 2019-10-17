// Package Dependences
import React from 'react';
import { Form, FormGroup, Label, Input,} from 'reactstrap';

// Local Dependences
import MenuFormButtons from '../buttons/form/edit-menu-group.jsx';


const MenuItemForm = (props) => {
  return (
    <Form className="update-menu-form">
      <div className="form-heading">Edit menu items</div>
      <FormGroup>
        <Label>Item name</Label>
        <Input type="input" name="menu_item_name" id="menu_item_name" placeholder="enter a menu item name" />
      </FormGroup>
      <FormGroup>
        <Label>Item description</Label>
        <Input type="inputt" name="menu_item_description" id="menu_item_description" placeholder="enter a menu item description" />
      </FormGroup>
      <FormGroup>
      <Label>Item price</Label>
        <Input type="input" name="menu_item_price" id="menu_item_price" placeholder="enter a menu item price" />
      </FormGroup>
      <FormGroup check>
        <Label check >
          <Input type="checkbox" />{' '}
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
      <MenuFormButtons />
    </Form>
  );
}

export default MenuItemForm;
