import React from 'react'
import {Panel,Col, Grid, Row} from 'react-bootstrap'
import Header from '../common/Header'
import TaskProgressBar from '../common/TaskProgressBar'
import TaskCard from '../common/TaskCard'

const StagesDashboard = () => (
  <div className='content'>
    <Grid>
        <Header/>
        <br/>
        <Row>
            <Col md={12}>
                <TaskProgressBar/>
            </Col>
        </Row>
        <Row>
            <Col md={12}>
                <Panel>
                    <TaskCard content='T1' percentage={25}/>
                    <TaskCard content='T2' />
                    <TaskCard content='T1'/>
                    <TaskCard content='T1'/>
                    <TaskCard content='T1'/>
                    <TaskCard content='T1'/>
                    <TaskCard content='T1'/>
                </Panel>
            </Col>
        </Row>
    </Grid> 
  </div>
)

export default StagesDashboard
