import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';
import '../css/Stage.css';

class Stage extends Component {
  render () {
    return (
      <article className="Stage">
      </article>
    );
  }
}

Stage.propTypes = {
  name: PropTypes.string,
  votes: PropTypes.object,
  user: PropTypes.object,
  handleSelect: PropTypes.func,
  handleDeselect: PropTypes.func
};

export default Stage;
