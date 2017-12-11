import React from 'react';
import { ProgressBar, Panel, Label, Col, Row } from 'react-bootstrap';

const GeneralProgressBar = () => (
  <Panel className="taskCard__panel">
    <Row className=" generalProgressBar generalProgressBar__mainRow progressBar__row row--colored">
      <Col md={12} className="progressBar__col">
        <ProgressBar now={20} />
      </Col>
      <Col md={12}>
        <Label className="ProgressBar__Label--percentage">20%</Label>
      </Col>
    </Row>
  </Panel>
);

export default GeneralProgressBar;
