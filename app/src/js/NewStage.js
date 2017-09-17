import React, { Component, PropTypes } from 'react';
import '../css/NewStage.css';

class NewStage extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { name } = this.state;

    return (
      <form
        className="NewStage"
      >
        <input
          type="text"
          value={ name }
          placeholder="Name of Stage"
          onChange={(event) => this.setState({ name: event.target.value })}
        />
        <button
          onClick={this.handleSubmit}
          disabled={!name}
        >
          Submit
        </button>
      </form>
    );
  }
}

NewStage.propTypes = {
  stagesRef: PropTypes.object
};

export default NewStage;
