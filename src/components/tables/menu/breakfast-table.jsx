// Package Dependences
import React from 'react';
import { Table } from 'reactstrap';

class BreakfastTable extends React.Component {
  _isMounted = false;           // variable to hold the components mounted state

  constructor() {
    super();
    this.state = ({
      data: []            // set a null variable for data
    })
  };


  componentDidMount() {
    this._isMounted = true;           // set mounted state to true

    fetch('http://localhost:4200/api/menu-items')    // get data 
      .then(res => res.json())   // json the results
      .then(data => {
        if (this._isMounted) {                  // if the component is mounted, do stuff
        this.setState({    // set to storage?
          data: data
        })}
      })
      .catch(err => {
        console.log(err);
      })
  };


  render() {
    console.log(this.state.data)
    if (this.state.data !== '') {     // if there is data, do stuff
      return (
        <Table>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((item, index) => { 
              if (item.menu_item_breakfast === 1) { 
              return (
                <tr>
                  <th scope="row"></th>
                  <td>{item.menu_item_name}</td>
                  <td>{item.menu_item_description}</td>
                  <td>${item.menu_item_price}</td>
                </tr>
              )
            } 
            })}
          </tbody>
        </Table>
      )
    }
    else {
      return null;
    }
  };


  componentWillUnmount() {            //reset components mounted state on unmount
    this._isMounted = false;
  };
};

export default BreakfastTable;
