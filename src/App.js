import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Currosel from './components/Currosel';
import Font from './components/Fontlink';
import Quote from './components/Quote';
import Movingtext from './components/Movingtext';

const App = () => {
  return (
    <>
    <Header />
    <main className = 'py-3'>
      <Container> <h1>Welcome to Vishagan Chits</h1>
      
      </Container> 
      </main>
      <Container><Movingtext text="Chit starting from 1 Lakh to 20 Lakhs for Enquiry call 9952144404" /></Container>
      
      
     
      <Container> <Currosel /></Container> 
      
      
      
      
    
    <Container>  <Quote /> </Container>
    <Container> <Font /> </Container>
  
    <Footer />
    </>
      
    
  )
}

export default App;
