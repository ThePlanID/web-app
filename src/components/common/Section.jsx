import React from 'react';
import { Panel } from 'react-bootstrap';
import { node, string } from 'prop-types';

const Section = ({ title, children }) => (
  <Panel className="section">
    <h2>{title}</h2>
    {children}
  </Panel>
);

Section.propTypes = {
  children: node.isRequired,
  title: string
};

Section.defaultProps = {
  title: ''
};

export default Section;
