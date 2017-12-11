import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import UserPanel from '../common/UserPanel';
import Header from '../common/Header';
import Section from '../common/Section';

/* eslint-disable */

class PeopleDashboard extends Component {
  render = () => (
    <div className="content">
      <Grid>
        <Header {...this.props} />
        <Section>
          <Row>
            <Col md={6}>
              <UserPanel percentage={50} color="green" star />
            </Col>
            <Col md={6}>
              <UserPanel percentage={50} color="green" />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <UserPanel percentage={50} color="green" />
            </Col>
            <Col md={6}>
              <UserPanel percentage={75} color="green" />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <UserPanel percentage={25} color="red" />
            </Col>
            <Col md={6}>
              <UserPanel percentage={25} color="red" />
            </Col>
          </Row>
        </Section>
      </Grid>
    </div>
  );
}

export default PeopleDashboard;
