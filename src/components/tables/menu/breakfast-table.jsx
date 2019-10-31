// Package Dependences
import React from 'react';
import { Table } from 'reactstrap';


// On this page,  I set a variable to reflect if the component is mounted (cause 
// issues if it stays mounted) and set an empty variable to hold the data.  I have
// a fetch that pulls all the data and saves it to state.  I then check for data, 
// and if I git some I use it to run a display loop (each table item creates a new entry).


class BreakfastTable extends React.Component {
  _isMounted = false;

  constructor() {
    super();
    this.state = ({
      data: []
    })
  };


  componentDidMount() {
    this._isMounted = true;
    let breakfastURL = ('http://localhost:4200/api/menu-items/breakfast')

    fetch(breakfastURL)
      .then(res => res.json())
      .then(data => {
        if (this._isMounted) {
        this.setState({
          data: data
        })}
      })
      .catch(err => {
        console.log(err);
      })
  };


  render() {
    console.log(this.state.data)
    if (this.state.data !== '') {
      return (
        <Table responsive>
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
              return (
                <tr key={item.menu_item_id} value="menu_item_id">
                  <th scope="row"></th>
                  <td>{item.menu_item_name}</td>
                  <td>{item.menu_item_description}</td>
                  <td>${item.menu_item_price}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      )
    }
    else {
      return null;
    }
  };


  componentWillUnmount() {
    this._isMounted = false;
  };
};


export default BreakfastTable;
