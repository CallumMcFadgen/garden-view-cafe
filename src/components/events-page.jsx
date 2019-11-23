// Package Dependences
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'reactstrap';

// Local Dependences
import AutumnTable from './tables/events/autumn-events';
import SpringTable from './tables/events/spring-events';
import SummerTable from './tables/events/summer-events';
import WinterTable from './tables/events/winter-events';


class EventsPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col className="image-col-banner">
            <img className="banner-image" src="./images/banners/banner-img.png" alt="events page banner" />
            <h1 className="banner-text">Events</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="quote-text">I te tuatahi he mataku rawa ngā tuakana ki te puta ake. Ka rere anō tana karanga. "Kia tere, i mua i tōna aranga ake, kei tahuna tātau, ā, mate noa!" I taua wā tonu ka tiro ake te rā ki ngā tahataha o te rua, ka kite i a Māui e tū ana i mua i a ia. Ka pukuriri atu a Tamanuiterā, ka whiua e ia tētahi poro ahi ki a Māui, ka karo a Māui, ka mau tonu ki tana taura, me tana karakia anō. "Taura nui, taura roa, taura kaha, taura toa, taura here i a Tamanuiterā, whakamaua kia mau kia ita!</p>
          </Col>
        </Row>
        <Row>
          <Col className="image-col-banner">
            <img className="sub-banner-image" src="./images/banners/sub-banner-spring.png" alt="spring flowers" />
            <h2 className="sub-banner-text">Spring</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <SpringTable />
          </Col>
        </Row>
        <Row>
          <Col className="image-col-banner">
            <img className="sub-banner-image" src="./images/banners/sub-banner-summer.png" alt="summer wheat" />
            <h2 className="sub-banner-text">Summer</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <SummerTable />
          </Col>
        </Row>
        <Row>
          <Col className="image-col-banner">
            <img className="sub-banner-image" src="./images/banners/sub-banner-autumn.png" alt="autumn leaves" />
            <h2 className="sub-banner-text">Autumn</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <AutumnTable />
          </Col>
        </Row>
        <Row>
          <Col className="image-col-banner">
            <img className="sub-banner-image" src="./images/banners/sub-banner-winter.png" alt="frosty herbs" />
            <h2 className="sub-banner-text">Winter</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <WinterTable />
          </Col>
        </Row>
        <Row className="pre-footer-spacing">
        </Row>
      </React.Fragment>
    )
  };
};


export default EventsPage;