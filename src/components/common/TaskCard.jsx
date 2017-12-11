import React from 'react';
import { Col, Label, Panel, ProgressBar, Row } from 'react-bootstrap';
import { arrayOf, object, string, number } from 'prop-types';
import uuid from 'uuid-v4';

const TaskCard = ({ title, percentage, tasks }) => (
  <Panel className="taskCard__panel">
    <Row className="taskCard__mainRow">
      <Col md={12} className="col--left">
        <Row>
          <Col md={12}>
            <h2 className="panel__title">{title}</h2>
          </Col>
        </Row>
        <Row>
          {tasks.map(task => (
            <Col md={1} key={uuid()}>
              <Label
                className={`taskCard__titleLabel taskCard__titleLabel--${(task.percentage === 0 && '0') || (task.percentage === 25 && '25') || (task.percentage === 50 && '50') || (task.percentage === 75 && '75') || (task.percentage === 100 && '100')}`}
              >
                {task.label}
              </Label>
            </Col>
          ))}
          <Col md={1} className="taskCard__arrowCol">
            <img
              alt="arrow"
              src="..\..\public\svg\chevron-right.svg"
              className="taskCard__arrowImg"
            />
          </Col>
        </Row>
        <Row>
          <Col
            md={8}
            className={`taskCard__progressBarCol--${(percentage === 0 && '0') || (percentage === 25 && '25') || (percentage === 50 && '50') || (percentage === 75 && '75') || (percentage === 100 && '100')}`}
          >
            <ProgressBar now={100} className="taskCard__progressBar" />
          </Col>
          <Col md={4} className="taskCard__progressBarColLabel">
            <Label className="taskCard__progressBarLabel">{`${percentage}%`}</Label>
          </Col>
        </Row>
      </Col>
    </Row>
  </Panel>
);

TaskCard.propTypes = {
  title: string,
  percentage: number,
  tasks: arrayOf(object)
};

TaskCard.defaultProps = {
  title: '',
  percentage: 0,
  tasks: [{ label: '', percentage: 0 }]
};

export default TaskCard;
