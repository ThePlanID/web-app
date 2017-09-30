import React from "react";
import { Col, Grid, Row } from "react-bootstrap";
import UserPanel from "../common/UserPanel";
import Header from "../common/Header";

const PeopleDashboard = () => (
  <div className="content">
    <Grid>
      <Header />
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
    </Grid>
  </div>
);

export default PeopleDashboard;
