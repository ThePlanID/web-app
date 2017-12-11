import React, { Component } from 'react';
// import { shape, object } from 'prop-types';
import { Col, Grid, Row } from 'react-bootstrap';
import Header from '../common/Header';
import StatisticsCard from '../common/StatisticsCard';
import InfoCard from '../common/InfoCard';
import Section from '../common/Section';

/*eslint-disable*/
class GeneralDashboard extends Component {
  render = () => (
    <div className="content">
      <Grid>
        <Header {...this.props} />
        <Section title="Statistics">
          <Row>
            <Col md={7}>
              <StatisticsCard title="Eficiencia" percentage="35" />
            </Col>
            <Col md={5}>
              <InfoCard title="Dias consumidos" content="4" footer="Dias" />
            </Col>
          </Row>
          <Row>
            <Col md={7}>
              <StatisticsCard title="Porcentaje de mejora" percentage="16" />
            </Col>
            <Col md={5}>
              <InfoCard title="Bloqueos" content="4" footer="Dias" />
            </Col>
          </Row>
        </Section>
      </Grid>
    </div>
  );
}

export default GeneralDashboard;
