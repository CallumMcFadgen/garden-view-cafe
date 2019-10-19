// Package Dependences
import React from 'react';
import { Table } from 'reactstrap';
import moment from "moment";

class AutumnTable extends React.Component {

  constructor() {
    super();
    this.state = ({
      data: ''            // set a null variable for data
    })
  }

  componentDidMount() {
    fetch('http://localhost:4200/api/events')    // get data 
      .then(res => res.json())   // json the results
      .then(data => {
        this.setState({    // set to storage?
          data: data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }
  render() {
    console.log(this.state.data)
    if (this.state.data !== '') {     // if there is data, do stuff
      return (
        <Table>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((item, index) => {  
              return (
                <tr>
                  <th scope="row"></th>
                  <td>{item.event_name}</td>
                  <td>{moment(item.event_date).format("YYYY-MM-DD")}</td>
                  <td>{item.event_description}</td>
                  <td>${item.event_price}</td>
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
  }
}

export default AutumnTable;