import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Container, Row, Col } from 'react-bootstrap'

const TextScroller = ({ text }) => {
  const [key, setKey] = useState(1);

  const scrolling = useSpring({
    from: { transform: "translate(60%,0)" },
    to: { transform: "translate(-60%,0)" },
    config: { duration: 20000 },
    reset: true,
    //reverse: key % 2 == 0,
    onRest: () => {
      setKey(key + 1);
    }
  });

  return (
    <Container
    key={key}>
      <Row>
     
        <Col>
      <animated.div class="moving" style={scrolling}>{text}</animated.div>
      </Col>
      
      </Row>
    
    </Container>
  );
};

export default TextScroller;
