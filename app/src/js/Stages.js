import React, { Component, PropTypes } from 'react';
import Stage from './Stage';
import map from 'lodash/map';
import '../css/Stages.css';

class Stages extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <section className="Stages">
      </section>
    );
  }
}

Stages.propTypes = {
  user: PropTypes,
  stagesRef: PropTypes.object,
  stages: PropTypes.object
};

export default Stages;
