// Package Dependences
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

// Local Dependences
import GalleryTile from './gallery/gallery-tile';


// Gallery page contains tiles for thumbnail and info, link to nested gallery pages in future
class GalleryPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col className="image-col-banner">
            <img className="banner-image" src="./images/banners/banner-img.png" alt="gallery page banner" />
            <h1 className="banner-text">Gallery</h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" md="6" lg="3" xl="3">
            <GalleryTile />
          </Col>
          <Col xs="12" sm="6" md="6" lg="3" xl="3">
            <GalleryTile />
          </Col>
          <Col xs="12" sm="6" md="6" lg="3" xl="3">
            <GalleryTile />
          </Col>
          <Col xs="12" sm="6" md="6" lg="3" xl="3">
            <GalleryTile />
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" md="6" lg="3" xl="3">
            <GalleryTile />
          </Col>
          <Col xs="12" sm="6" md="6" lg="3" xl="3">
            <GalleryTile />
          </Col>
          <Col xs="12" sm="6" md="6" lg="3" xl="3">
            <GalleryTile />
          </Col>
          <Col xs="12" sm="6" md="6" lg="3" xl="3">
            <GalleryTile />
          </Col>
        </Row>
        <Row className="pre-footer-spacing">
        </Row>
      </React.Fragment>
    )
  };
};


export default GalleryPage;