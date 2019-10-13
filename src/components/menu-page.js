//Dependences
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'reactstrap';

class MenuPage extends Component {
  render() {
    return (
      <Container>

          <Row className="row-padding">
          <Col>
          <img className="banner-image" src="./images/banner/banner-img.png" alt="homepage banner" />
          <h1 className="banner-text">Menu</h1>
          </Col>
        </Row>

        <Row className="row-padding">
          <Col>
          <p className="quote-text"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </Col>
        </Row>

        <Row className="row-padding">
          <Col className="image-col">
          <img className="sub-banner-image" src="./images/sub-banner/sub-banner-breakfast.png" alt="coffee&pancakes" />
          <h2 className="sub-banner-text">Breakfast</h2>
          </Col>
        </Row>

        <Row className="row-padding">
          <Col>
          <h4 className="menu-headings">Name</h4>
          </Col>
          <Col>
          <h4 className="menu-headings">Description</h4>
          </Col>
          <Col>
          <h4 className="menu-headings">Price</h4>
          </Col>
        </Row>

        </Container>
    )
  }
}
  
ReactDOM.render(<MenuPage />,document.querySelector('#root'));

export default MenuPage;