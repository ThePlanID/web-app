import React from 'react'
import {Panel, Label} from 'react-bootstrap'
import { string } from 'prop-types'

const InfoCard = ({title, content, footer}) => (
    <Panel>
        <span className='infoCard__span--title'>{title}</span>
        <Label className='infoCard__span--content'>{content}</Label>
        <Label className='infoCard__span--footer'>{footer}</Label>
    </Panel>
);

InfoCard.propTypes = {
    title: string,
    content: string,
    footer: string,
}

InfoCard.defaultProps = {
    title: '',
    content: '',
    footer: '',
}

export default InfoCard