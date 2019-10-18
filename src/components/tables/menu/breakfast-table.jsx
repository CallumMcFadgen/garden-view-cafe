// Package Dependences
import React from 'react';
import { Table } from 'reactstrap';

class BreakfastTable extends React.Component {

  constructor() {
    super();
    this.state = ({
      data: ''            // set a null variablr for data
    })
  }

  componentDidMount() {
    fetch('http://localhost:4200/api/menu-items')    // get data 

      .then(res => res.json())        // json the results
      .then(data => {
        this.setState({             // set to storage?
          data: data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    console.log(this.state.data)
    if (this.state.data !== '') {     // if the state has data "do shit!"
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
              <td>{this.state.data[0].menu_item_name}</td>
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
      )
    }
    else {
      return null;
    }
  }
}

export default BreakfastTable;
