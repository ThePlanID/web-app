import React from 'react'
import {Panel, Label} from 'react-bootstrap'
import { string } from 'prop-types'

const StatisticsCard = ({title, percentage}) => (
    <Panel className='statisticsCard'>
        <span className='statisticsCard__span--title'>{title}</span>
        <h1><Label className='statisticsCard__span--percentage'>{percentage}</Label></h1>
    </Panel>
);

StatisticsCard.propTypes = {
    title: string,
    percentage: string,
}

StatisticsCard.defaultProps = {
    title: '',
    percentage: ''
}

export default StatisticsCard