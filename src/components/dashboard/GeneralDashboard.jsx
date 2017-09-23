import React from 'react'
import {Col, Grid, Row} from 'react-bootstrap'
import Header from '../common/Header'
import TaskProgressBar from '../common/TaskProgressBar'
import StatisticsCard from '../common/StatisticsCard'
import InfoCard from '../common/InfoCard'

const GeneralDashboard = () => (
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
      <Col md={7}>
        <StatisticsCard title='Eficiencia' percentage='35%'/>
      </Col>
      <Col md={5}>
        <InfoCard title='Dias consumidos' content='4' footer='Dias'/>
      </Col>
    </Row>
    <Row>
      <Col md={7}>
        <StatisticsCard title='Porcentaje de mejora' percentage='16%'/>
      </Col>
      <Col md={5}>
        <InfoCard title='Bloqueos' content='4' footer='Dias'/>
      </Col>
    </Row>
    </Grid> 
  </div>
)

export default GeneralDashboard
