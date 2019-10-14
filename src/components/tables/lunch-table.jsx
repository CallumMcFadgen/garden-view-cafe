import React from 'react';
import { Table } from 'reactstrap';

const LunchTable = (props) => {
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
          <td>Roast Vegetable Salad</td>
          <td>A range of seasonal produce, roasted with a balsamic glaze and served with fresh salad greens</td>
          <td>$15.00</td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td>Roast Lamb Salad</td>
          <td>Local free range lamb, roasted with a mint dressing and served with salad greens</td>
          <td>$18.00</td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td>Fish & Chips</td>
          <td>Fresh fish fried in a beer batter and served with homemade chunky fries and Aioli</td>
          <td>$20.00</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default LunchTable;
