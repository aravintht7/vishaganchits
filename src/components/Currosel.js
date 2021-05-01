import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Currosel = () => {
    return (
        <Container>
            <Row>
        <div class="col-centered">
            <h2>
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img class="d-block w-100" src="../img-01.jpg" />
                </div>
                <div>
                    <img class="d-block w-100" src="../img-02.jpg" />
                </div>
                <div>
                    <img class="d-block w-100" src="../img-03.png" />
                </div>
            </Carousel>
            </h2>
        </div>
        </Row>
        </Container>
    )
}

export default Currosel
