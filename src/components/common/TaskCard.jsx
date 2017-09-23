import React from 'react'
import {Label} from 'react-bootstrap'
import { string, number } from 'prop-types'

const TaskCard = ({content, percentage}) => (
    
        <Label className={`taskCard__titleLabel taskCard__titleLabel--${percentage === 0 && '0' || percentage === 25 && '25' || percentage === 50 &&'50' }` }>{content}</Label>
);

TaskCard.propTypes = {
    content: string,
    percentage: number,
}

TaskCard.defaultProps = {
    content: '',
    percentage:0,
}

export default TaskCard