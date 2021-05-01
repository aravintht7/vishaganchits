import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Quote = () => {
    return (
      <Container>
  <Row>
    <Col><blockquote class="blockquote">
  <p  class="mb-0">Do not save what is left after spending, but spend what is left after saving.</p>
  <footer class="blockquote-footer"><cite title="Source Title">Warren Buffett</cite></footer>
</blockquote></Col>
    <Col><blockquote class="blockquote text-center">
  <p class="mb-0">You don’t have to see the whole staircase, just take the first step.</p>
  <footer class="blockquote-footer"><cite title="Source Title">Martin Luther King</cite></footer>
</blockquote></Col>
    <Col><blockquote class="blockquote text-right">
  <p class="mb-0">A penny saved is a penny earned.</p>
  <footer class="blockquote-footer"><cite title="Source Title">George Herbert</cite></footer>
</blockquote></Col>
  </Row>
</Container>
    
       
    )
}

export default Quote
