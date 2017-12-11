import React from 'react';
import { Panel, Label } from 'react-bootstrap';
import { string } from 'prop-types';

const InfoCard = ({ title, content, footer }) => (
  <Panel className="infoCard">
    <span className="infoCard__title">{title}</span>
    <Label className="infoCard__content">{content}</Label>
    <Label className="infoCard__footer">{footer}</Label>
  </Panel>
);

InfoCard.propTypes = {
  title: string,
  content: string,
  footer: string
};

InfoCard.defaultProps = {
  title: '',
  content: '',
  footer: ''
};

export default InfoCard;
