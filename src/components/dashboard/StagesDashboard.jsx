import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import Header from '../common/Header';
import TaskCard from '../common/TaskCard';
import Section from '../common/Section';

/*eslint-disable*/
class StagesDashboard extends Component {
  render = () => (
    <div className="content">
      <Grid>
        <Header {...this.props} />
        <Section>
          <Row>
            <Col md={12}>
              <TaskCard
                title="Diseño"
                percentage={25}
                tasks={[
                  { label: 'T1', percentage: 100 },
                  { label: 'T2', percentage: 100 },
                  { label: 'T3', percentage: 75 },
                  { label: 'T4', percentage: 50 },
                  { label: 'T5', percentage: 25 },
                  { label: 'T6', percentage: 0 }
                ]}
              />
              <TaskCard
                title="Desarrollo"
                percentage={50}
                tasks={[
                  { label: 'T1', percentage: 100 },
                  { label: 'T2', percentage: 100 },
                  { label: 'T3', percentage: 75 },
                  { label: 'T4', percentage: 50 },
                  { label: 'T5', percentage: 25 },
                  { label: 'T6', percentage: 0 }
                ]}
              />
              <TaskCard
                title="Control de calidad"
                percentage={75}
                tasks={[
                  { label: 'T1', percentage: 100 },
                  { label: 'T2', percentage: 100 },
                  { label: 'T3', percentage: 75 },
                  { label: 'T4', percentage: 50 },
                  { label: 'T5', percentage: 25 },
                  { label: 'T6', percentage: 0 }
                ]}
              />
            </Col>
          </Row>
        </Section>

      </Grid>
    </div>
  );
}

export default StagesDashboard;
