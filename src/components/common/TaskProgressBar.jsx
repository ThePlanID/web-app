import React from 'react'
import {ProgressBar,Panel, Label} from 'react-bootstrap'

const TaskProgressBar = () => (
    <Panel>
        <ProgressBar now={20} />
        <h1><Label className='ProgressBar__Label--percentage'>20%</Label></h1>
    </Panel>
);

export default TaskProgressBar;