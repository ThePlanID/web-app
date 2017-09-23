import React from 'react'
import {Button, Col, Grid, Row} from 'react-bootstrap'

const Header = () => (
  <header className='metroHeader'>
    <h1>Metro Card</h1>
    <Grid>
      <Row>
        <Col md={4}>
          <Button>General</Button>
        </Col>
        <Col md={4} mdPull={3}>
          <Button>Etapas</Button>
        </Col>
        <Col md={4} mdPull={6}>
          <Button>Personas</Button>
        </Col>
      </Row>
    </Grid>
  </header>
)

export default Header;
