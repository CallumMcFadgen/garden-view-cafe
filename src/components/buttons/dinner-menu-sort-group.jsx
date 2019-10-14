import React from 'react';
import { Button } from 'reactstrap';


const DinnerButtons = (props) => {
  return (
    <div>
      <Button outline color="secondary">Gluten Free</Button>{' '}
      <Button outline color="secondary">Vegan</Button>{' '}
    </div>
  );
}

export default DinnerButtons;