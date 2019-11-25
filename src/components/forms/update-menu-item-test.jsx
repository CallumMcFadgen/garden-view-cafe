// Package Dependences
import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

// On this page I am disabling the button submit event so that I can use it to bind 
// the users input to the variable 'this'.  I then reset the input fields.  The rest is 
// currently a work in progress.
class UpdateTest extends React.Component {
  _isMounted = false;

  constructor() {
    super();
    this.state = ({
      data: []
    })
    this.handleSubmit = this.handleSubmit.bind(this)
  };

  handleSubmit(event) {
    event.preventDefault();


    let name = this.item.menu_item_name.value;
    console.log(name);



    let updatedURL = ('http://localhost:4200/api/menu-items/' + name)
    fetch(updatedURL, {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "menu_item_name": name,
        "user_id": 1
      })
    })
      .then(() => {
        alert("Menu item has been updated")
        //this.ResetForm();
      })
      .catch(err => {
        console.log(err)
      })
  };

  //   ResetForm = () => {                                           // rests inputs and checkboxes
  //     menu_item_name.defaultValue = item.menu_item_name;
  // };


  componentDidMount() {
    this._isMounted = true;

    fetch('http://localhost:4200/api/menu-items')
      .then(res => res.json())
      .then(data => {
        if (this._isMounted) {
          this.setState({
            data: data
          })
        }
      })
      .catch(err => {
        console.log(err);
      })
  };

  //problem with how input is being handled

  render() {
    if (this.state.data !== '') {
      return (
        <div>
          {this.state.data.map((item, index) => {
            return (
              <div key={item.menu_item_id} value="menu_item_id">
                <Form name="update-menu-item-form" className="form" onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label>Name</Label>
                    <Input 
                    type="input" 
                    name="menu_item_name" 
                    id="menu_item_name" 
                    defaultValue={item.menu_item_name} 
                    onChange={this.handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <Label>Description</Label>
                    <Input 
                    type="textarea" 
                    name="menu_item_description" 
                    id="menu_item_description" 
                    defaultValue={item.menu_item_description} 
                    onChange={this.handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <Label>Price</Label>
                    <Input 
                    type="number" 
                    name="menu_item_price" 
                    id="menu_item_price" 
                    defaultValue={item.menu_item_price} 
                    onChange={this.handleChange} />
                  </FormGroup>
                  <FormGroup check>
                    <Label check >
                      <Input 
                      type="checkbox" 
                      defaultChecked={item.menu_item_available} 
                      onChange={this.handleChange} />
                      Available
                  </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input 
                      type="checkbox" 
                      defaultChecked={item.menu_item_gluten_free} 
                      onChange={this.handleChange} />
                      Gluten free
                  </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input 
                      type="checkbox" 
                      defaultChecked={item.menu_item_vegan} 
                      onChange={this.handleChange} />
                      Vegan
                      </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input 
                      type="checkbox" 
                      defaultChecked={item.menu_item_breakfast} 
                      onChange={this.handleChange} />
                      Breakfast
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input 
                      type="checkbox" 
                      defaultChecked={item.menu_item_lunch} 
                      onChange={this.handleChange} />
                      Lunch
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input 
                      ype="checkbox" 
                      defaultChecked={item.menu_item_dinner} 
                      onChange={this.handleChange} />
                      Dinner
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input 
                      type="checkbox" 
                      defaultChecked={item.menu_item_function} 
                      onChange={this.handleChange} />
                      Functions
                    </Label>
                  </FormGroup>
                  <br />
                  <Button color="secondary" type="submit" value="Add to menu" >UPDATE</Button>
                </Form>
              </div>
            )
          })}
        </div>
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





export default UpdateTest;

