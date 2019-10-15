import React from 'react';
import { Table } from 'reactstrap';

const SpringTable = (props) => {
  return (
    <Table>
      <thead>
        <tr className="test">
          <th></th>
          <th>Name</th>
          <th>Date</th>
          <th>Description</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row"></th>
          <td>Name</td>
          <td>Date</td>
          <td>Desc</td>
          <td>Price</td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td>Name</td>
          <td>Date</td>
          <td>Desc</td>
          <td>Price</td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td>Name</td>
          <td>Date</td>
          <td>Desc</td>
          <td>Price</td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td>Name</td>
          <td>Date</td>
          <td>Desc</td>
          <td>Price</td>
        </tr>

      </tbody>
    </Table>
  );
}

export default SpringTable;