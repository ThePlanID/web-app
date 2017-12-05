import React from 'react';
import { Panel } from 'react-bootstrap';
import { string } from 'prop-types';
import CircularProgressbar from 'react-circular-progressbar';

const StatisticsCard = ({ title, percentage }) => (
  <Panel className="statisticsCard">
    <span className="statisticsCard__span--title">{title}</span>
    <CircularProgressbar
      percentage={percentage}
      initialAnimation
      className="statisticsCard__span--percentage"
    />
  </Panel>
);

StatisticsCard.propTypes = {
  title: string,
  percentage: string
};

StatisticsCard.defaultProps = {
  title: '',
  percentage: ''
};

export default StatisticsCard;
