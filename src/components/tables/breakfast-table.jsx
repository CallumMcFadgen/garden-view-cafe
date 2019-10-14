import React from 'react';
import { Table } from 'reactstrap';

const BreakfastTable = (props) => {
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
          <td>Toasted Muesli</td>
          <td>Homemade toasted muesli with fresh fruit, yogurt and milk</td>
          <td>$15.00</td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td>Porridge</td>
          <td>Organic oats served with brown sugar, cream and served with fresh fruit</td>
          <td>$15.00</td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td>Pancakes</td>
          <td>Served with caramelised bananas, cured bacon, mascarpone vanilla cream & maple syrup</td>
          <td>$15.00</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default BreakfastTable;
