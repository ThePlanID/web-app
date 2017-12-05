import React from 'react';
import { ProgressBar, Panel, Label, Col, Row } from 'react-bootstrap';

const TaskProgressBar = () => (
  <Panel className="taskCard__panel">
    <Row className="taskProgressBar__mainRow">
      <Row>
        <Col md={12}>
          <h2 className="panel__title">Progress</h2>
        </Col>
      </Row>
      <Row className="row--white">
        <Col md={12}>
          <ProgressBar now={20} />
        </Col>
        <Col md={12}>
          <Label className="ProgressBar__Label--percentage">20%</Label>
        </Col>
      </Row>
    </Row>
  </Panel>
);

export default TaskProgressBar;
