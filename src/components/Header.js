import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap'

const Header = () => {
    return (
        
<header>
  <Navbar fixed="top" bg="dark" variant='dark' expand="lg" collapseOnSelect>
      <Container>
  <Navbar.Brand href="/">Sri Vishagan Chits Private Limited</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/cart">Home<i className='fas fa-home'></i></Nav.Link>
      <Nav.Link href="/login">User<i className='fas fa-user'></i></Nav.Link>
      <Nav.Link href="/login">9952144404<i className='fas fa-mobile' aria-hidden="true"></i></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>  
</header>
    )
}

export default Header
