// Package Dependences
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

// Local Dependences
import PageNotFoundTile from './error/404';


// Error page contains an image and text Error 404
class ErrorPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col>
            <PageNotFoundTile />
          </Col>
        </Row>
      </React.Fragment>
    )
  };
};


export default ErrorPage;