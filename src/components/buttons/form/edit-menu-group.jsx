// Package Dependences
import React from 'react';
import { Button } from 'reactstrap';


const MenuFormButtons = (props) => {
  return (
    <div>
      <Button color="secondary">Add</Button>{' '}
      <Button color="secondary">Update</Button>{' '}
      <Button color="secondary">Delete</Button>{' '}
    </div>
  );
}

export default MenuFormButtons;