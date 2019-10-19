// Package Dependences
import React from 'react';
import { Table } from 'reactstrap';
import moment from "moment";

class AutumnTable extends React.Component {
  _isMounted = false;           // variable to hold the components mounted state

  constructor() {
    super();
    this.state = ({
      data: ''            // set a null variable for data
    })
  };

  
  componentDidMount() {
    this._isMounted = true;           // set mounted state to true

    fetch('http://localhost:4200/api/events')    // get data 
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
              <th>Time & Date</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((item, index) => {  
              return (
                <tr key={item.event_id} value="event_id">
                  <th scope="row"></th>
                  <td>{moment(item.event_date_time).format("h:mm a DD-MM-YYYY")}</td>
                  <td>{item.event_name}</td>
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
  };


  componentWillUnmount() {            //reset components mounted state on unmount
    this._isMounted = false;
  };
};

export default AutumnTable;