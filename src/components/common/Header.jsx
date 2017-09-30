import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import TaskProgressBar from "./TaskProgressBar";

const Header = () => (
  <header className="metroHeader">
    <h1>Metro Card</h1>
    <Row>
      <Col md={4}>
        <Button href="/">General</Button>
      </Col>
      <Col md={4} mdPull={3}>
        <Button href="/stages">Etapas</Button>
      </Col>
      <Col md={4} mdPull={6}>
        <Button href="/people">Personas</Button>
      </Col>
    </Row>
    <br />
    <Row>
      <Col md={12}>
        <TaskProgressBar />
      </Col>
    </Row>
  </header>
);

export default Header;
