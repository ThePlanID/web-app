import React from "react";
import { ProgressBar, Panel, Label, Col, Row } from "react-bootstrap";

const TaskProgressBar = () => (
  <Panel className="taskCard__panel">
    <Row className="taskProgressBar__mainRow">
      <Col md={12}>
        <h2 className="panel__title">Progreso General</h2>
      </Col>
      <Col md={12}>
        <ProgressBar now={20} />
      </Col>
      <Col md={12}>
        <Label className="ProgressBar__Label--percentage">20%</Label>
      </Col>
    </Row>
  </Panel>
);

export default TaskProgressBar;
