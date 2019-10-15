// Package Dependences
import React from 'react';
import { Table } from 'reactstrap';


const DinnerTable = (props) => {
  return (
    <Table>
      <thead>
        <tr className="test">
          <th></th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row"></th>
          <td>Halloumi Salad</td>
          <td>Grilled local halloumi, julienne vegetables, served with salad greens</td>
          <td>$20.00</td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td>Steak Fillet</td>
          <td>Pure angus beef sirloin served with roasted potatoes and seasonal vegetables</td>
          <td>$30.00</td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td>Seafood Fettuccine</td>
          <td>Handmade pasta tossed with alfredo sauce and full of fresh seafood and served with crust sourdough bread</td>
          <td>$25.00</td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td>Name</td>
          <td>Desc</td>
          <td>Price</td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td>Name</td>
          <td>Desc</td>
          <td>Price</td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td>Name</td>
          <td>Desc</td>
          <td>Price</td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td>Name</td>
          <td>Desc</td>
          <td>Price</td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td>Name</td>
          <td>Desc</td>
          <td>Price</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default DinnerTable;
