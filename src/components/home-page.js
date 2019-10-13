//Dependences
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'reactstrap';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Row className="row-padding">
          <Col>
            <img className="banner-image" src="./images/banner/banner-img.png" alt="homepage banner" />
            <h1 className="banner-text">Welcome</h1>
          </Col>
        </Row>

        <Row className="row-padding">
          <Col xs="12" sm="12" md="12" lg="4" xl="4" className="image-col">
            <img className="image-medium-portrait" src="./images/medium/medium-wineglasses-image.png" alt="wineglass" />
          </Col>
          <Col xs="12" sm="12" md="12" lg="4" xl="4" className="quote-col">
            <p className="quote-text"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
              <br />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
          </Col>
          <Col xs="12" sm="12" md="12" lg="4" xl="4" className="col-one-of-three">
            <p className="regular-text"> "Lorem ipsum dolor sit amet, consectetur adipiscing eLorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing lit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p className="regular-text">"dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing lit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor"</p>
          </Col>
        </Row>

        <Row className="row-padding">
          <Col xs="12" sm="12" md="12" lg="4" xl="4" className="quote-col">
            <p className="quote-text"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
              <br />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
          </Col>
          <Col xs="12" sm="12" md="12" lg="8" xl="8" className="image-col">
            <img className="image-medium-landscape" src="./images/medium/medium-coffee-image.png" alt="coffee" />
          </Col>
        </Row>

        <Row className="row-padding">
          <Col xs="12" sm="12" md="12" lg="4" xl="4" className="col-one-of-three">
            <p className="regular-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p className="regular-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <p className="regular-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </Col>
          <Col xs="12" sm="12" md="12" lg="4" xl="4" className="image-col">
            <img className="image-medium-portrait" src="./images/medium/medium-frenchtoast-image.png" alt="frenchtoast" />
          </Col>
          <Col xs="12" sm="12" md="12" lg="4" xl="4" className="quote-col">
            <p className="quote-text"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
              <br />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
          </Col>
        </Row>
      </div>
    )
  }
}

ReactDOM.render(<HomePage />, document.querySelector('#root'));

export default HomePage;