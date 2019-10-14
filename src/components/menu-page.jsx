//Dependences
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'reactstrap';
import BreakfastButtons from './buttons/breakfast-menu-sort-group';
import LunchButtons from './buttons/lunch-menu-sort-group';
import DinnerButtons from './buttons/dinner-menu-sort-group';
import BreakfastTable from './tables/breakfast-table';
import LunchTable from './tables/lunch-table';
import DinnerTable from './tables/dinner-table';

class MenuPage extends Component {
  render() {
    return (
      <div>

        <Row>
          <Col className="image-col-banner">
            <img className="banner-image" src="./images/banner/banner-img.png" alt="homepage banner" />
            <h1 className="banner-text">Menu</h1>
          </Col>
        </Row>

        <Row>
          <Col>
            <p className="quote-text"> I tētahi ahiahi, e whakareri ana a Māui me ōna tuākana i tētahi hāngi, hai hākari mā rātau. Kātahi anō ka mutu ake te whakawera i ngā kōhatu, ka tō te rā, ka pōuri rawa mō rātau. Ka hōhā a Māui ki te kai i ana kai i roto i te pōuri, ka tū a ia ki te mura o te ahi, ka kōrero atu ki tōna iwi.</p>
          </Col>
        </Row>

        <Row>
          <Col className="image-col-banner">
            <img className="sub-banner-image" src="./images/sub-banner/sub-banner-breakfast.png" alt="coffee&pancakes" />
            <h2 className="sub-banner-text">Breakfast</h2>
          </Col>
        </Row>

        <Row>
          <Col className="menu-button">
          <BreakfastButtons/>
          </Col>
        </Row>

        <Row>
          <Col>
          <BreakfastTable/>
          </Col>
        </Row>

        <Row>
          <Col className="image-col-banner">
            <img className="sub-banner-image" src="./images/sub-banner/sub-banner-breakfast.png" alt="coffee&pancakes" />
            <h2 className="sub-banner-text">Lunch</h2>
          </Col>
        </Row>

        <Row>
          <Col className="menu-button">
          <LunchButtons/>
          </Col>
        </Row>

        <Row>
          <Col>
          <LunchTable/>
          </Col>
        </Row>

        <Row>
          <Col className="image-col-banner">
            <img className="sub-banner-image" src="./images/sub-banner/sub-banner-breakfast.png" alt="coffee&pancakes" />
            <h2 className="sub-banner-text">Dinner</h2>
          </Col>
        </Row>

        <Row>
          <Col className="menu-button">
          <DinnerButtons/>
          </Col>
        </Row>

        <Row>
          <Col>
          <DinnerTable/>
          </Col>
        </Row>

      </div>
    )
  }
}

ReactDOM.render(<MenuPage />, document.querySelector('#root'));

export default MenuPage;