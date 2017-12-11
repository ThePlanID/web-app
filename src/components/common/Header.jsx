import React from 'react';
// import { shape, object } from 'prop-types';
import { Button, Col, Row } from 'react-bootstrap';
import GeneralProgressBar from './GeneralProgressBar';
import Section from './Section';

/*eslint-disable */
const Header = props => (
  <header className="metroHeader">

    <Section>
      <h1>Metro Card</h1>
      <Row className="metroHeader__btnCol">
        <Col md={2}>
          <Button
            href="/"
            className={props.route.path === '/' ? 'btn--on' : ''}
          >
            General
          </Button>
        </Col>
        <Col md={2}>
          <Button
            href="/stages"
            className={props.route.path === '/stages' ? 'btn--on' : ''}
          >
            Stages
          </Button>
        </Col>
        <Col md={2}>
          <Button
            href="/people"
            className={props.route.path === '/people' ? 'btn--on' : ''}
          >
            People
          </Button>
        </Col>
      </Row>
    </Section>
    <br />
    <Section title="Progress">
      <GeneralProgressBar />
    </Section>

  </header>
);
export default Header;
