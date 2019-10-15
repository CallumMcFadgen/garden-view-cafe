import React from 'react';
import { Button } from 'reactstrap';


const SpringButtons = (props) => {
  return (
    <div>
      <Button outline color="secondary">Day Time</Button>{' '}
      <Button outline color="secondary">Night Time</Button>{' '}
      <Button outline color="secondary">Seating</Button>{' '}
    </div>
  );
}

export default SpringButtons;