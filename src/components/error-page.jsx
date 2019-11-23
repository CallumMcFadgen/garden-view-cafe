// Package Dependences
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'reactstrap';

// Local Dependences
import PageNotFoundTile from './error/404';


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