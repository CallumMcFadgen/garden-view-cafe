import React from 'react';
import { Button } from 'reactstrap';


const LunchButtons = (props) => {
  return (
    <div>
      <Button outline color="secondary">Gluten Free</Button>{' '}
      <Button outline color="secondary">Vegan</Button>{' '}
    </div>
  );
}

export default LunchButtons;